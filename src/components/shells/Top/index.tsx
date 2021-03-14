import { Box, Button, Text } from '@chakra-ui/react';
import { Center, Footer, Logo, Redirect } from '@components/common';
import { signIn, useSession } from 'next-auth/client';

export const TopShell = () => {
  const [session, sessionLoading] = useSession();
  const onClickCTA = () => {
    signIn();
  };

  if (sessionLoading) return <>loading session</>;
  if (session) return <Redirect path="/dashboard" />;

  return (
    <>
      <Center transform="translate(-50%, -100%)">
        <Logo as="h1" justifyContent="center" />
        <Text mt="16px" size="xs" textAlign="center">
          <Text fontWeight="bold" as="span">Stormflow</Text> is a twitter client optimized <br />
          to organize your thought.
        </Text>
        <Box mt="16px">
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
