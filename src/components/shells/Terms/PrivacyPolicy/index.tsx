import { useRouter } from 'next/router';
import { Heading, Text, Box, Button } from '@chakra-ui/react';

export const PrivacyPolicyShell = () => {
  const router = useRouter();
  const onClickTop = (e) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <>
      <Heading>Privacy-policy</Heading>
      {/* TODO 利用規約と共通化 */}
      <Box mt="12px" backgroundColor="white" padding="8px">
        <Text>Stormflow use following information of your twitter account</Text>
        <Text>Tweet</Text>
        <Text>Profile Image</Text>
        <Text>User name</Text>
        <Text>User ID</Text>
      </Box>
      <Button mt="12px" size="sm" onClick={onClickTop}>
        back to top
      </Button>
    </>
  );
};
