import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Session } from 'next-auth/client';
import {
  Flex,
  Button,
  Box,
  useDisclosure,
  Stack,
  Skeleton,
  useToast,
  Text,
} from '@chakra-ui/react';
import { Tweet } from '@utils/types';
import { fetcher, mutator } from '@utils';
import { useWindowSize } from '@hooks';
import { Navigation, Toast, Footer, Logo } from '@components/common';
import { TweetStormBox, NewStormModal } from './components';

type DashboardShellProps = {
  session: Session;
};

export const DashboardShell: React.FC<DashboardShellProps> = (props) => {
  const { session } = props;
  const { height } = useWindowSize();
  const [tweetInput, setTweetInput] = useState<string>('');
  const [replyId, setReplyId] = useState<string>('');
  const { isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();
  const { isOpen: isOpenAdd, onOpen: onOpenAdd, onClose: onCloseAdd } = useDisclosure();
  const toast = useToast();
  const queryClient = useQueryClient();
  const { data: storms, isLoading } = useQuery<Tweet[]>('storms', fetcher('/api/fetchStorm'));
  //NOTE any any any any直す
  const { mutate } = useMutation<any, any, any, any>(mutator('/api/createStorm'), {
    onSuccess: () => {
      queryClient.invalidateQueries('storms');
      toast({
        position: 'top-right',
        render: () => <Toast>STORM STORM STORM</Toast>,
        duration: 1500,
      });
    },
    onError: () => {
      toast({
        position: 'top-right',
        render: () => <Toast status="fatal">ERROR:TRY AGAIN LATER</Toast>,
        duration: 1500,
      });
    },
  });

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

  return (
    <>
      <Box pos="fixed" bottom="8px" right="8px" zIndex="1000">
        <Footer />
      </Box>
      <Box pos="fixed" top="8px" right="8px" zIndex="1000">
        <Navigation user={session ? session.user : null} />
      </Box>
      <Box
        bg="white"
        maxW="600px"
        mx="auto"
        minH={`${height}px`}
        borderX="1px"
        borderColor="gray.200"
        position="relative"
      >
        {isLoading && (
          <Stack p="8px">
            {[...Array(32)].map((_value, i) => (
              <Skeleton key={i} mt="4px" height="40px" />
            ))}
          </Stack>
        )}
        {!isLoading && (
          <>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              w="100%"
              p="8px"
              bg="white"
              borderTop="1px"
              borderBottom="2px"
              borderColor="gray.200"
              pos="sticky"
              top="0"
              left="0"
              zIndex="1000"
            >
              <Logo size="md" />
              <Button
                alignSelf="flex-end"
                size="sm"
                display="inline-block"
                onClick={onOpenCreate}
                borderRadius="20px"
              >
                CREATE STORM
              </Button>
            </Flex>
            {!!storms.length ? (
              storms.map((storm) => (
                <TweetStormBox key={storm.id} tweet={storm} onAddStorm={onAddStorm} />
              ))
            ) : (
              <Box
                pos="absolute"
                top="50%"
                left="50%"
                zIndex="1000"
                transform="translate(-50%, -200%)"
                textAlign="center"
                border="1px"
                borderColor="gray.200"
                py="16px"
                px="24px"
                borderRadius="16px"
                w="100%"
                maxW="320px"
              >
                <Box>
                  <Text>Create Your Very First STORM </Text>
                </Box>
                <Button
                  mt="16px"
                  size="sm"
                  display="inline-block"
                  onClick={onOpenCreate}
                >
                  CREATE STORM
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>

      {/* TODO 新規作成と追加は表示モーダルは分けるがコンポーネントは共通化 */}
      <NewStormModal
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        onChangeInput={(e) => setTweetInput(e.target.value)}
        headerText="CREATE STORM"
        inputPlaceholder="What's in your head ?"
        onStorm={onCreateStorm}
        count={tweetInput.length}
      />
      <NewStormModal
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
        onChangeInput={(e) => setTweetInput(e.target.value)}
        headerText="ADD STORM"
        inputPlaceholder="What's in your head ?"
        onStorm={onSubmitAddStorm}
        count={tweetInput.length}
      />
    </>
  );
};
