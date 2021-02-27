import { Button } from '@chakra-ui/react';
import { Center } from '@components/common';
import { signIn } from 'next-auth/client';

export const TopShell = () => {
  const onClickCTA = () => {
    signIn();
  };
  return (
    <Center>
      <Button onClick={onClickCTA}>Start using StormFlow</Button>
    </Center>
  );
};
