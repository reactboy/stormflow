import { useQuery } from 'react-query';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Button, Box, useDisclosure } from '@chakra-ui/react';
import { Tweet } from '@utils/types';
import { fetcher } from '@utils';
import { useWindowSize } from '@hooks';
import { TweetStormBox, NewStormModal } from './components';

export const DashboardShell = () => {
  const router = useRouter();
  const { isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();
  const { isOpen: isOpenAdd, onOpen: onOpenAdd, onClose: onCloseAdd } = useDisclosure();
  const { data: storms, isLoading } = useQuery<Tweet[]>('storms', fetcher('/api/fetchStorm'));
  const { height } = useWindowSize();

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
      <Box maxW="600px" mx="auto" minH={`${height}px`} border="1px" borderColor="gray.400">
        <Button
          w="100%"
          onClick={async () => {
            //@ts-ignore
            const data: any = await signOut({ redirect: false, callbackUrl: '/' });
            router.push(data.url);
          }}
        >
          sign out
        </Button>
        <Button w="100%" onClick={onOpenCreate}>
          create storm
        </Button>
        {!!storms.length
          ? storms.map((storm) => (
              <TweetStormBox key={storm.id} tweet={storm} onAddStorm={onAddStorm} />
            ))
          : null}
      </Box>

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
