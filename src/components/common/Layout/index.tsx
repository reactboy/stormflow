import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

type Props = {
  Header?: React.FC<any>;
  Footer?: React.FC<any>;
};

export const Layout: React.FC<Props> = (props) => {
  const { children, Header = null, Footer = null } = props;
  return (
    <Flex minH="100vh" w="100%" maxW="1440px" direction="column" bg="gray.50">
      {Header && <Header />}
      <Box flex="1" position="relative" p="8px">
        {children}
      </Box>
      {Footer && <Footer />}
    </Flex>
  );
};

export const Center = (props) => {
  const { children, ...restProps } = props;
  return (
    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" {...restProps}>
      {children}
    </Box>
  );
};
