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
      {/* TODO プライバシーポリシーと共通化 */}
      <Box mt="12px" backgroundColor="white" padding="8px">
        <Text>
          Currently as we're still building the site our terms are pretty simple. Be kind. Terms
          will be updated.
        </Text>
      </Box>
      <Button mt="12px" size="sm" onClick={onClickTop}>
        back to top
      </Button>
    </>
  );
};
