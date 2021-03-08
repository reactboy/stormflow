import { Box } from '@chakra-ui/react';

const toastStatus = {
  default: {
    borderColor: 'gray.200',
    bg: 'white',
    color: 'gray.900',
  },
  //TODO status毎に色を変える
  success: { borderColor: 'gray.200', bg: 'white', color: 'gray.900' },
  fatal: { borderColor: 'gray.200', bg: 'white', color: 'gray.900' },
};

type ToastProps = {
  status?: keyof typeof toastStatus;
  children: string;
};

export const Toast: React.FC<ToastProps> = (props) => {
  const { status = 'default', children } = props;

  return (
    //NOTE 真ん中に表示させるためにネストする
    <Box textAlign="center">
      <Box
        display="inline-block"
        border="1px"
        borderColor={toastStatus[status].borderColor}
        borderRadius="8px"
        bg={toastStatus[status].bg}
        color={toastStatus[status].color}
        fontWeight="bold"
        py="8px"
        px="16px"
      >
        {children}
      </Box>
    </Box>
  );
};
