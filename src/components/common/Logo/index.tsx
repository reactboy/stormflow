import { Flex, Text } from '@chakra-ui/react';
import { LogoIcon } from '@components/common/Icon';

export const Logo = (props) => (
  <Flex alignItems="center" {...props}>
    <LogoIcon boxSize={12} />
    <Text lineHeight={1} ml="8px" fontSize="48px">
      Stormflow
    </Text>
  </Flex>
);
