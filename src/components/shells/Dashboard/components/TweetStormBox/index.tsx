import { Box, Text, IconButton, Flex } from '@chakra-ui/react';
import { Tweet } from '@utils/types';
import { formatDateString } from '@utils';
import { LogoIcon } from '@components/common';
import { TweetStorm } from './components';

type TweetStormBoxProps = {
  tweet: Tweet;
  onAddStorm: (id: string) => () => void;
};

export const TweetStormBox: React.FC<TweetStormBoxProps> = (props) => {
  const { tweet, onAddStorm } = props;
  const { id_str, text, created_at, includes = [] } = tweet;
  return (
    <Box
      bg="white"
      p="8px"
      maxW="600px"
      borderY="1px"
      borderColor="gray.200"
      _notFirst={{ borderTop: 'none' }}
    >
      <Text textAlign="right" fontSize="8px">
        {formatDateString(created_at)}
      </Text>
      <Text fontSize="16px">{text}</Text>
      {!!includes.length &&
        includes.map((tweet) => <TweetStorm level={0 + 1} key={tweet.id} tweet={tweet} />)}
      <Flex pt="4px">
        <IconButton
          border="1px"
          borderColor="gray.200"
          borderRadius="full"
          size="sm"
          ml="auto"
          onClick={onAddStorm(id_str)}
          aria-label="add storm"
          icon={<LogoIcon boxSize={5} />}
        />
      </Flex>
    </Box>
  );
};
