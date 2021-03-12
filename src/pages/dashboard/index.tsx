import { DashboardShell } from '@components/shells';
import { useSession } from 'next-auth/client';
import { Redirect } from '@components/common';

const Dashboard = () => {
  const [session, loadingSession] = useSession();

  if (loadingSession) return <>loading session</>;
  if (!session) return <Redirect path="/">Redirect to Top</Redirect>;

  return (
    <>
      <DashboardShell session={session} />
    </>
  );
};

export default Dashboard;
