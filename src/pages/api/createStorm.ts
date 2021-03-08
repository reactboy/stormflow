import { getSession } from 'next-auth/client';
import { dbConnect } from '@utils/mongodb';
import { Storm, StormDocument } from '@utils/mongodb/models';
import { getTwitterClient } from '@libs/twitter';

export default async (req, res) => {
  const { tweetInput, replyId } = req.body;
  const isInReply = !!replyId;
  const session = await getSession({ req });
  const { accessToken, refreshToken, uid } = session;
  console.log('is in reply', isInReply, replyId);
  const twitter = await getTwitterClient(accessToken, refreshToken);
  const tweet = await twitter.post(
    'statuses/update',
    isInReply
      ? {
          status: tweetInput,
          in_reply_to_status_id: `${replyId}`,
          auto_populate_reply_metadata: true,
        }
      : { status: tweetInput },
  );
  console.log(tweet);

  const storm = { tweetId: tweet.id, tweetIdStr: tweet.id_str, userId: uid } as StormDocument;
  await dbConnect();
  const resStorm = await Storm.create(storm);
  console.log(resStorm);

  res.status(200).json({ text: 'success' });
};
