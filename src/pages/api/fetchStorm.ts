import { dbConnect } from '@utils/mongodb';
import { Storm } from '@utils/mongodb/models';
//MEMO サーバーサイドで取得してこの形に整形する。

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

export default async (_req, res) => {
  await dbConnect();

  const resStorm = await Storm.find({});
  console.log(resStorm);

  res.status(200).json(stubStorms);
};
