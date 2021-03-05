import { Box, Stack, Text } from '@chakra-ui/react';

type FooterProps = {
  direction?: 'column' | 'row';
};

export const Footer: React.FC<FooterProps> = (props) => {
  const { direction = 'column' } = props;
  return (
    <>
      <Stack direction={direction} textAlign={direction === 'column' ? 'right' : 'left'}>
        {/* TODO ページ作ったらコメントアウト解除 */}
        {/* <Box>
          <Text fontSize="xs">terms-of-use</Text>
        </Box>
        <Box>
          <Text fontSize="xs">privacy-policy</Text>
        </Box>
        <Box>
          <Text fontSize="xs">roadmap</Text>
        </Box> */}
      </Stack>
      <Box>
        <Text textAlign="center" fontSize="xs">
          Made with ♥️ by
          <Text
            display="inline-block"
            ml="4px"
            as="a"
            href="https://twitter.com/reactboyyy"
            rel="noopener"
            target="_blank"
            fontWeight="bold"
            color="twitter.400"
            textDecoration="underline"
          >
            @reactboyyy
          </Text>
        </Text>
      </Box>
    </>
  );
};
