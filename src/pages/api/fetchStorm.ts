import { getSession } from 'next-auth/client';
import { dbConnect } from '@utils/mongodb';
import { Storm, StormDocument } from '@utils/mongodb/models';
import { getTwitterClient } from '@libs/twitter';

//NOTE サーバーサイドで取得してこの形に整形する。
const stubStorms = [
  {
    id: '1',
    text: 'initial storm',
    includes: [
      {
        id: '1-1',
        text: 'followed storm',
        includes: [
          {
            id: '1-1-1',
            text: 'followed followed storm',
            includes: [
              {
                id: '1-1-1-1',
                text: 'followed followed followed storm',
                includes: [],
              },
            ],
          },
          {
            id: '1-1-2',
            text: 'followed followed storm',
            includes: [],
          },
        ],
      },
      {
        id: '1-2',
        text: 'followed storm',
        includes: [],
      },
      {
        id: '1-3',
        text: 'followed storm',
        includes: [],
      },
    ],
  },
  {
    id: '2',
    text: 'initial storm',
    includes: [
      {
        id: '2-1',
        text: 'followed storm',
        includes: [
          {
            id: '2-1-1',
            text: 'followed followed storm',
            includes: [
              {
                id: '2-1-1-1',
                text: 'followed followed followed storm',
                includes: [],
              },
            ],
          },
          {
            id: '2-1-2',
            text: 'followed followed storm',
            includes: [],
          },
        ],
      },
      {
        id: '2-2',
        text: 'followed storm',
        includes: [],
      },
      {
        id: '2-3',
        text: 'followed storm',
        includes: [],
      },
    ],
  },
];

export default async (req, res) => {
  const session = await getSession({ req });
  const { accessToken, refreshToken, uid } = session;

  //NOTE uidが一致するものを取得する
  await dbConnect();
  const resStorm = await Storm.find({ userId: uid });
  const stormId = (resStorm as StormDocument[]).map((storm) => storm.tweetId);
  console.log('stormId', stormId);

  //NOTE resStormにidが含まれるtweetを取得したい
  const twitter = await getTwitterClient(accessToken, refreshToken);
  const tweets = await twitter.get('statuses/user_timeline', {
    user_id: uid,
  });
  // console.log(tweets);

  res.status(200).json(tweets);
};
