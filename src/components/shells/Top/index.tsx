import { Box, Button } from '@chakra-ui/react';
import { Center, Footer, Logo } from '@components/common';
import { signIn } from 'next-auth/client';

export const TopShell = () => {
  const onClickCTA = () => {
    signIn();
  };
  return (
    <>
      <Center transform="translate(-50%, -100%)">
        <Logo as="h1" />
        <Box mt="24px">
          <Button size="sm" display="block" mx="auto" onClick={onClickCTA}>
            Start using Stormflow
          </Button>
        </Box>
      </Center>
      <Box position="fixed" bottom="8px" left="50%" transform="translateX(-50%)">
        <Footer direction="row" />
      </Box>
    </>
  );
};
