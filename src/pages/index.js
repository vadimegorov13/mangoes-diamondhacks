import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignInComponent from '../components/sign-in';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { Button } from '@mantine/core';

const Home = () => {
  // Destructure user, loading, and error out of the hook.
  const [user, loading, error] = useAuthState(auth);
  // console.log the current user and loading status
  // console.log('Loading:', loading, '|', 'Current user:', user);

  const healthQuery = ['vegetarian'];
  const foodQuery = ['celery'];
  const excludedQuery = ['apple cider'];

  //API URL
  const apiRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=${foodQuery}&excluded=${excludedQuery}&health=${healthQuery}&app_id=37a2ad96&app_key=9be81d361261c971e127ad0982138d5f&ingr=3-5&imageSize=SMALL&random=false&field=uri&field=label&field=image&field=url&field=ingredients`;

  useEffect(() => {
    fetch(apiRequest)
      .then((response) => response.json())
      .then((data) => console.log('data', data));
  }, [apiRequest]);

  const logout = () => {
    signOut(auth);
  };

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
          <Button onClick={logout}>logout</Button>
        </>
      )}
    </div>
  );
};

export default Home;
