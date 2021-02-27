import { NextPage } from 'next';
import { SigninShell } from '@components/shells';
import { providers } from 'next-auth/client';

type SigninProps = {
  providers: any;
};

const Signin: NextPage<SigninProps> = (props) => {
  const { providers } = props;
  return (
    <>
      <SigninShell providers={providers} />
    </>
  );
};

Signin.getInitialProps = async (context) => {
  return {
    //@ts-ignore
    providers: await providers(context),
  };
};

export default Signin;
