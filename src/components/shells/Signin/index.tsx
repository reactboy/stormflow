import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const SigninShell = () => {
  const router = useRouter();
  const onClickSignin = () => {
    alert('sign in');
    router.push('/dashboard');
  };
  return (
    <>
      <Button onClick={onClickSignin}>Signin with twitter</Button>
    </>
  );
};
