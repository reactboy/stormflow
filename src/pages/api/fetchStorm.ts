import { getSession } from 'next-auth/client';
import { dbConnect } from '@utils/mongodb';
import { Storm, StormDocument } from '@utils/mongodb/models';
import { getTwitterClient } from '@libs/twitter';
import { sortByCreatedBy } from '@utils/sort';

export default async (req, res) => {
  const session = await getSession({ req });
  const { accessToken, refreshToken, uid } = session;

  //NOTE uidが一致するものを取得する
  await dbConnect();
  const resStorm = await Storm.find({ userId: uid });
  const stormId = (resStorm as StormDocument[]).map((storm) => storm.tweetIdStr);

  //NOTE resStormにidが含まれるtweetを取得する
  const twitter = await getTwitterClient(accessToken, refreshToken);
  const tweets = await twitter.get('statuses/lookup', {
    id: stormId.join(','),
    trim_user: true,
  });
  console.log(tweets);

  //TODO 再帰的な実装にしたい
  const storms = tweets
    .filter((tweet) => !tweet.in_reply_to_status_id)
    .map(({ id, id_str: idStr, text, created_at: createdAt }) => {
      const includes = tweets
        .filter((tweet) => tweet.in_reply_to_status_id === id)
        .map(({ id, id_str: idStr, text, created_at: createdAt }) => ({
          id,
          idStr,
          text,
          createdAt,
          includes: [],
        }))
        .sort(sortByCreatedBy('asc'));
      return { id, idStr, text, createdAt, includes };
    })
    .sort(sortByCreatedBy('desc'));

  res.status(200).json(storms);
};
