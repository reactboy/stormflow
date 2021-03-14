import { Box, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
type FooterProps = {
  direction?: 'column' | 'row';
};

export const Footer: React.FC<FooterProps> = (props) => {
  const { direction = 'column' } = props;
  return (
    <Box fontFamily="IBM Plex Mono">
      <Stack direction={direction} textAlign={direction === 'column' ? 'right' : 'left'}>
        <Box>
          <Text textDecoration="underline" fontSize="xs">
            <Link href="/termsOfUse">
              <a>terms-of-use</a>
            </Link>
          </Text>
        </Box>
        <Box>
          <Text textDecoration="underline" fontSize="xs">
            <Link href="/privacyPolicy">
              <a>privacy-policy</a>
            </Link>
          </Text>
        </Box>
        {/* TODO ページ作ったらコメントアウト解除 */}
        {/* <Box>
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
    </Box>
  );
};
