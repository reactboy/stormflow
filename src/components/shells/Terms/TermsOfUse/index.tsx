import { useRouter } from 'next/router';
import { Heading, Text, Box, Button } from '@chakra-ui/react';

export const TermsOfUseShell = () => {
  const router = useRouter();
  const onClickTop = (e) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <>
      <Heading>Terms-of-Use</Heading>
      <Box>
        <Text>
          Currently as we're still building the site our terms are pretty simple. Be kind. Terms
          will be updated.
        </Text>
      </Box>
      <Button size="sm" onClick={onClickTop}>
        back to top
      </Button>
    </>
  );
};
