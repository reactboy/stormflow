import { Box, Button, Text } from '@chakra-ui/react';
import { Tweet } from '@utils/types';
import { TweetStorm } from './components';

type TweetStormBoxProps = {
  tweet: Tweet;
  onAddStorm: (id: string) => () => void;
};

export const TweetStormBox: React.FC<TweetStormBoxProps> = (props) => {
  const { tweet, onAddStorm } = props;
  const { id, text, includes = [] } = tweet;
  return (
    <Box
      bg="white"
      p="8px"
      maxW="600px"
      borderY="1px"
      borderColor="gray.400"
      _notFirst={{ borderTop: 'none' }}
    >
      <Text fontSize="16px">{text}</Text>
      {!!includes.length &&
        includes.map((tweet) => <TweetStorm level={0 + 1} key={tweet.id} tweet={tweet} />)}
      <Button mt="8px" w="100%" onClick={onAddStorm(id)}>
        ADD Storm
      </Button>
    </Box>
  );
};
