import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignInComponent from '../components/sign-in';
import Layout from '../components/Layout/Layout';
import { Text } from '@mantine/core';

const Home = () => {
  const [user, loading] = useAuthState(auth);

  // const healthQuery = ['vegetarian'];
  // const foodQuery = ['celery'];
  // const excludedQuery = ['apple cider'];

  //API URL
  // const apiRequest = `https://api.edamam.com/api/recipes/v2?type=public&q=${foodQuery}&excluded=${excludedQuery}&health=${healthQuery}&app_id=37a2ad96&app_key=9be81d361261c971e127ad0982138d5f&ingr=3-5&imageSize=SMALL&random=false&field=uri&field=label&field=image&field=url&field=ingredients`;

  // useEffect(() => {
  //   fetch(apiRequest)
  //     .then((response) => response.json())
  //     .then((data) => console.log('data', data));
  // }, [apiRequest]);

  let body = null

  if (loading) {
    body = (
      <Text align='center' size='xl'>
        Loading...
      </Text>
    );
  }else if (!user){
    body = <SignInComponent />;
  }else{
    body = <h1>You logged in as {user.displayName}</h1>;
  }

  return (
    <Layout>
      {body}
    </Layout>
  );
};

export default Home;
