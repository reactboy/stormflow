import { Button, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Center } from '@components/common';

export const TopShell = () => {
  const router = useRouter();
  const onClickCTA = () => {
    router.push('/signin');
  };
  return (
    <Center>
      <Button onClick={onClickCTA}>Start using StormFlow</Button>
    </Center>
  );
};
