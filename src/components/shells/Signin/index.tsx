import Link from 'next/link';
import { signIn } from 'next-auth/client';
import { Button, Flex } from '@chakra-ui/react';
import { Center } from '@components/common';

type SigninShellProps = {
  //TODO next-auth関係の型定義の仕方を考える
  providers: any[];
};

export const SigninShell: React.FC<SigninShellProps> = (props) => {
  const { providers } = props;
  return (
    <Center>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button
            onClick={() =>
              signIn(provider.id, { callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard` })
            }
          >
            Sign in with {provider.name}
          </Button>
        </div>
      ))}
      <Flex justifyContent="center" mt="16px">
        <Link href="/">
          <Button as="a" cursor="pointer">
            back to top
          </Button>
        </Link>
      </Flex>
    </Center>
  );
};
