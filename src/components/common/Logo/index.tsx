import { Flex, Text , FlexProps} from '@chakra-ui/react';
import { LogoIcon } from '@components/common/Icon';

const logoSize = {
  sm: {
    fontSize: '16px',
    boxSize: 4,
    ml: '2px',
  },
  md: {
    fontSize: '32px',
    boxSize: 8,
    ml: '4px',
  },
  lg: {
    fontSize: '48px',
    boxSize: 12,
    ml: '4px',
  },
};

type LogoProps = {
  size?: keyof typeof logoSize;
  withIcon?: boolean;
};

export const Logo: React.FC<LogoProps & FlexProps> = (props) => {
  const { withIcon = true, size = 'lg', ...restProps } = props;
  return (
    <Flex alignItems="center" {...restProps}>
      {withIcon && <LogoIcon boxSize={logoSize[size].boxSize} />}
      <Text
        fontFamily="IBM Plex Mono"
        fontStyle="italic"
        fontWeight="medium"
        lineHeight={1}
        ml={withIcon ? logoSize[size].ml : 0}
        fontSize={logoSize[size].fontSize}
      >
        Stormflow
      </Text>
    </Flex>
  );
};
