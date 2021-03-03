import { Box, Button, Text, IconButton, Icon, Flex } from '@chakra-ui/react';
import { Tweet } from '@utils/types';
import { TweetStorm } from './components';

type TweetStormBoxProps = {
  tweet: Tweet;
  onAddStorm: (id: string) => () => void;
};

export const TweetStormBox: React.FC<TweetStormBoxProps> = (props) => {
  const { tweet, onAddStorm } = props;
  const { id_str, text, includes = [] } = tweet;
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
      <Flex pt="4px">
        <IconButton
          size="sm"
          ml="auto"
          onClick={onAddStorm(id_str)}
          aria-label="add storm"
          icon={
            //TODO アイコンを変える
            <Icon viewBox="0 0 200 200" color="red.500">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          }
        />
      </Flex>
    </Box>
  );
};
