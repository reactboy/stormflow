import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useSession } from 'next-auth/client';
import { Button, Box, useDisclosure } from '@chakra-ui/react';
import { Tweet } from '@utils/types';
import { fetcher, mutator } from '@utils';
import { useWindowSize } from '@hooks';
import { Navigation } from '@components/common';
import { TweetStormBox, NewStormModal } from './components';

export const DashboardShell = () => {
  const [tweetInput, setTweetInput] = useState<string>('');
  const [replyId, setReplyId] = useState<string>('');
  const [session, loading] = useSession();
  const { isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();
  const { isOpen: isOpenAdd, onOpen: onOpenAdd, onClose: onCloseAdd } = useDisclosure();
  const queryClient = useQueryClient();
  const { data: storms, isLoading } = useQuery<Tweet[]>('storms', fetcher('/api/fetchStorm'));
  //NOTE any any any any直す
  const { mutate } = useMutation<any, any, any, any>(mutator('/api/createStorm'), {
    onSuccess: () => {
      console.log('mutation success');
      queryClient.invalidateQueries('storms');
    },
    onError: () => {
      console.log('mutation error');
    },
  });
  const { height } = useWindowSize();

  const onCreateStorm = () => {
    if (!tweetInput) return;
    console.log('new storm created', tweetInput);
    mutate({ tweetInput });
    setTweetInput('');
    onCloseCreate();
  };
  const onAddStorm = (id: string) => () => {
    setReplyId(id);
    onOpenAdd();
  };
  const onSubmitAddStorm = () => {
    if (!tweetInput || !replyId) return;
    console.log('new storm added', replyId, tweetInput);
    mutate({ tweetInput, replyId });
    setTweetInput('');
    setReplyId('');
    onCloseAdd();
  };

  if (isLoading || loading) return <>loading</>;

  return (
    <>
      <Box pos="fixed" bottom="8px" right="8px">
        <Navigation user={session ? session.user : null} />
      </Box>
      <Box maxW="600px" mx="auto" minH={`${height}px`} borderX="1px" borderColor="gray.400">
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
        onChangeInput={(e) => setTweetInput(e.target.value)}
        headerText="CREATE Storm"
        inputPlaceholder="What's in your head ?"
        onStorm={onCreateStorm}
      />
      <NewStormModal
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
        onChangeInput={(e) => setTweetInput(e.target.value)}
        headerText="ADD Storm"
        inputPlaceholder="What's in your head ?"
        onStorm={onSubmitAddStorm}
      />
    </>
  );
};
