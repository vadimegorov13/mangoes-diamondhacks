import { Box, Button, createStyles, SimpleGrid, Text } from '@mantine/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import Phone from '../images/phone.svg';
import Layout from '../components/Layout/Layout';
import SignInComponent from '../components/sign-in';
import { auth } from '../firebase/firebase';
import Preferences from '../components/Lists/Preferences';
import Dislikes from '../components/Lists/Dislikes';
import Health from '../components/Lists/Health';
import Diet from '../components/Lists/Diet';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  grid: {
    [theme.fn.smallerThan('sm')]: {
      width: '20rem',
      maxWidth: '20rem',
    },
  },
}));

const Home = () => {
  const router = useRouter()
  const classes = useStyles();
  const [user, loading] = useAuthState(auth);

  const handleRouter = () => {
    router.push('/recipes');
  }

  let body = null;

  if (loading) {
    body = (
      <Text align='center' size='xl'>
        Loading...
      </Text>
    );
  } else if (!user) {
    body = <SignInComponent />;
  } else {
    body = (
      <Box className={classes.grid}>
        <Phone />
        <SimpleGrid
          cols={4}
          spacing='lg'
          breakpoints={[
            { maxWidth: 1200, cols: 4, spacing: 'lg' },
            { maxWidth: 980, cols: 2, spacing: 'md' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <Preferences userId={user.uid} />
          <Dislikes userId={user.uid} />
          <Health userId={user.uid} />
          <Diet userId={user.uid} />
        </SimpleGrid>
        <Box align='center' my={'2rem'}>
          <Button
            variant='gradient'
            gradient={{ from: 'grape', to: 'pink', deg: 35 }}
            size='lg'
            onClick={handleRouter}
          >
            Generate Recipes
          </Button>
        </Box>
      </Box>
    );
  }

  return <Layout>{body}</Layout>;
};

export default Home;
