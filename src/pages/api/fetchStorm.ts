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

export default (req, res) => {
  res.status(200).json(stubStorms);
};
