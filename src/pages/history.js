import { Text } from '@mantine/core';
import Layout from '../components/Layout/Layout';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import CardComponent from '../components/Card';

const History = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  let body = null;

  if (loading) {
    body = (
      <Text align='center' size='xl'>
        Loading...
      </Text>
    );
  } else if (!user) {
    body = null;
    router.push('/');
  } else {
    body = (
      <Text align='center' size='xl'>
        History Page
      </Text>
    );
  }

  return (
    <Layout>
      <CardComponent></CardComponent>
    </Layout>
  );
};

export default History;
