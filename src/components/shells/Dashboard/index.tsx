import { useQuery } from 'react-query';
import { Button, Box, useDisclosure } from '@chakra-ui/react';
import { Tweet } from '@utils/types';
import { fetcher } from '@utils';
import { TweetStormBox, NewStormModal } from './components';

export const DashboardShell = () => {
  const { isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();
  const { isOpen: isOpenAdd, onOpen: onOpenAdd, onClose: onCloseAdd } = useDisclosure();
  const { data: storms, isLoading } = useQuery<Tweet[]>('storms', fetcher('/api/fetchStorm'));

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

  if (isLoading) return <>loading</>;

  return (
    <>
      <Box>
        {!!storms.length
          ? storms.map((storm) => (
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
        inputPlaceholder="What's in your head ?"
        onStorm={onCreateStorm}
      />
      <NewStormModal
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
        headerText="ADD Storm"
        inputPlaceholder="What's in your head ?"
        onStorm={onSubmitAddStorm}
      />
    </>
  );
};
