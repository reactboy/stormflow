import { Box, Text } from '@chakra-ui/react';
import { Tweet } from '@utils/types';

type TweetStormProps = {
  tweet: Tweet;
  level: number; //NOTE 何回ネストしているか
};

export const TweetStorm: React.FC<TweetStormProps> = (props) => {
  const { tweet, level } = props;
  const { id, text, includes = [] } = tweet;
  return (
    <Box mt="8px" border="1px" borderColor="gray.200">
      <Text fontSize="16px">{text}</Text>
      {!!includes.length &&
        includes.map((tweet) => <TweetStorm level={level + 1} key={tweet.id} tweet={tweet} />)}
    </Box>
  );
};
