import { useEffect } from 'react';
import { useRouter } from 'next/router';

type RedirectProps = {
  path?: string;
};

export const Redirect: React.FC<RedirectProps> = (props) => {
  const { children, path = '/' } = props;
  const router = useRouter();

  useEffect(() => {
    router.push(path);
  }, []);
  
  return <>{children}</>;
};
