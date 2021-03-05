import { Box, Stack } from '@chakra-ui/react';

type FooterProps = {
  direction?: 'column' | 'row';
};

export const Footer: React.FC<FooterProps> = (props) => {
  const { direction = 'column' } = props;
  return (
    <>
      <Stack direction={direction}>
        <Box>terms-of-use</Box>
        <Box>privacy-policy</Box>
        <Box>roadmap</Box>
      </Stack>
      <Box>made with ♥️ by @reactboyyy</Box>
    </>
  );
};
