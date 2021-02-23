import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Center } from '@components/common';

export const SigninShell = () => {
  const router = useRouter();
  const onClickSignin = () => {
    alert('sign in');
    router.push('/dashboard');
  };
  return (
    <Center>
      <Button onClick={onClickSignin}>Signin with twitter</Button>
    </Center>
  );
};
