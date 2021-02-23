import { Button, Box, useDisclosure } from '@chakra-ui/react';
import { Tweet } from '@utils/types';
import { TweetStormBox, NewStormModal } from './components';

//MEMO サーバーサイドで取得してこの形に整形する。
//TODO 型の共通化
const stubStorms: Tweet[] = [
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
      ,
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
      ,
    ],
  },
];

export const DashboardShell = () => {
  const { isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();
  const { isOpen: isOpenAdd, onOpen: onOpenAdd, onClose: onCloseAdd } = useDisclosure();

  const onCreateStorm = () => {
    console.log('create storm');
    onCloseCreate();
  };
  const onAddStorm = (id: string) => () => {
    console.log('add storm ', id);
    onOpenAdd();
  };
  const onSubmitAddStorm = () => {
    console.log('new storm added');
    onCloseAdd();
  };
  return (
    <>
      <Box>
        {!!stubStorms.length
          ? stubStorms.map((storm) => (
              <TweetStormBox key={storm.id} tweet={storm} onAddStorm={onAddStorm} />
            ))
          : null}
      </Box>
      <div>
        <Button onClick={onOpenCreate}>create storm</Button>
      </div>

      {/* TODO 新規作成と追加は表示モーダルは分けるがコンポーネントは共通化 */}
      <NewStormModal
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        headerText="CREATE Storm"
        inputPlaceholder="create storm"
        onStorm={onCreateStorm}
      />
      <NewStormModal
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
        headerText="ADD Storm"
        inputPlaceholder="add storm"
        onStorm={onSubmitAddStorm}
      />
    </>
  );
};
