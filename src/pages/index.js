import Link from 'next/link';
import { Button } from '@mantine/core';
import {auth} from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignInComponent from '../components/sign-in';

const Home = () => {
  // Destructure user, loading, and error out of the hook.
  const [user, loading, error] = useAuthState(auth);
  // console.log the current user and loading status
  console.log('Loading:', loading, '|', 'Current user:', user);


  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gridGap: 8,
        background:
          'linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      }}
    >
      {loading && <h4>Loading...</h4>}
      {!user && <SignInComponent />}
      {user && (
        <>
          <h1>You logged in as {user.displayName}</h1>
          <div style={{ flexDirection: 'row', display: 'flex' }}></div>
        </>
      )}
    </div>
  );
}

export default Home;
