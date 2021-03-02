import { Box } from '@chakra-ui/react';

type ToastStatus = 'success' | 'fatal';
type ToastProps = {
  status?: ToastStatus;
  children: string;
};

export const Toast: React.FC<ToastProps> = (props) => {
  const { status = 'success', children } = props;

  //TODO statusで見た目を変える

  return <Box>{children}</Box>;
};
