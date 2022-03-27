import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignInComponent from '../components/sign-in';
import Layout from '../components/Layout/Layout';
import {
  createStyles,
  Text,
  SimpleGrid,
  Paper,
  Title,
  Box,
  ScrollArea,
  Button,
  Divider,
} from '@mantine/core';
import { Plus } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  grid: {
    [theme.fn.smallerThan('sm')]: {
      width: '20rem',
      maxWidth: '20rem',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
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
        <SimpleGrid
          cols={3}
          spacing='lg'
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <Paper shadow='xl' radius='md' p='md' withBorder>
            <Title order={3}>Preferences</Title>
            <Divider my='sm' />
            <ScrollArea style={{ height: 300 }} type='always'>
            </ScrollArea>
            <Box align='center'>
              <Button color='pink'>
                Add Item <Plus />
              </Button>
            </Box>
          </Paper>
          <Paper shadow='xl' radius='md' p='md' withBorder>
            <Title order={3}>Dislikes</Title>
            <Divider my='sm' />
            <ScrollArea style={{ height: 300 }} type='always'></ScrollArea>
            <Box align='center'>
              <Button color='pink'>
                Add Item <Plus />
              </Button>
            </Box>
          </Paper>
          <Paper shadow='xl' radius='md' p='md' withBorder>
            <Title order={3}>Allergies/Health/Diet</Title>
            <Divider my='sm' />
            <ScrollArea style={{ height: 300 }} type='always'></ScrollArea>
            <Box align='center'>
              <Button color='pink'>
                Add Item <Plus />{' '}
              </Button>
            </Box>
          </Paper>
        </SimpleGrid>
        <Box align='center' my={'2rem'}>
          <Button
            variant='gradient'
            gradient={{ from: 'grape', to: 'pink', deg: 35 }}
            size='lg'
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
