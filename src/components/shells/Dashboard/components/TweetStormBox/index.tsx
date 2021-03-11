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
  const { idStr, text, createdAt, includes = [] } = tweet;
  return (
    <Box
      bg="white"
      p="8px"
      maxW="600px"
      borderY="1px"
      borderColor="gray.200"
      _notFirst={{ borderTop: 'none' }}
      role="group"
      overflowX="hidden"
    >
      <Text textAlign="right" fontSize="8px">
        {formatDateString(createdAt)}
      </Text>
      <Text transition="all ease .4s" _groupHover={{ fontWeight: 'bold' }} fontSize="16px">
        {text}
      </Text>
      {!!includes.length &&
        includes.map((tweet) => <TweetStorm level={0 + 1} key={tweet.id} tweet={tweet} />)}
      <Flex pt="4px">
        <IconButton
          border="1px"
          borderColor="gray.200"
          borderRadius="full"
          size="sm"
          ml="auto"
          onClick={onAddStorm(idStr)}
          aria-label="add storm"
          icon={<LogoIcon boxSize={5} />}
          transform="translateX(100%)"
          opacity="0"
          _groupHover={{ transform: 'translateX(0)', opacity: 1 }}
        />
      </Flex>
    </Box>
  );
};
