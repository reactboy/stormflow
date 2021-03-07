import { Flex, Text } from '@chakra-ui/react';
import { LogoIcon } from '@components/common/Icon';

export const Logo = (props) => (
  <Flex alignItems="center" {...props}>
    <LogoIcon boxSize={12} />
    <Text fontFamily="IBM Plex Mono" fontStyle="italic" fontWeight="medium" lineHeight={1} ml="4px" fontSize="48px">
      Stormflow
    </Text>
  </Flex>
);
