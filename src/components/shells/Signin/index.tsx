import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Center, Logo, Footer } from '@components/common';

type SigninShellProps = {
  //TODO next-auth関係の型定義の仕方を考える
  providers: any[];
};

export const SigninShell: React.FC<SigninShellProps> = (props) => {
  const { providers } = props;
  return (
    <>
      <Center transform="translate(-50%, -100%)">
        <Logo as="h1" />
        <Flex justifyContent="center" alignItems="flex-end" mt="16px">
          <Link href="/">
            <Button as="a" cursor="pointer" size="xs">
              back to top
            </Button>
          </Link>
          {Object.values(providers).map((provider) => (
            <Button
              ml="16px"
              key={provider.name}
              bg="twitter.400"
              _hover={{ opacity: 0.8 }}
              color="white"
              size="sm"
              onClick={() =>
                signIn(provider.id, { callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard` })
              }
            >
              Sign in with {provider.name}
            </Button>
          ))}
        </Flex>
      </Center>
      <Box position="fixed" bottom="8px" left="50%" transform="translateX(-50%)">
        <Footer direction="row" />
      </Box>
    </>
  );
};
