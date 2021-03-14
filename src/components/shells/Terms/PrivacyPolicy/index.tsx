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
      <Box>
        <Text>Stormflow use following information of your twitter account</Text>
        <Text>Tweet</Text>
        <Text>Profile Image</Text>
        <Text>User name</Text>
        <Text>User ID</Text>
      </Box>
      <Button size="sm" onClick={onClickTop}>
        back to top
      </Button>
    </>
  );
};
