import { Box, Button } from '@chakra-ui/react';
import { Center, Footer, Logo, Redirect } from '@components/common';
import { signIn, useSession } from 'next-auth/client';

export const TopShell = () => {
  const [session, sessionLoading] = useSession();
  const onClickCTA = () => {
    signIn();
  };

  if (sessionLoading) return <>loading session</>;
  if(session) return <Redirect path="/dashboard" />

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
