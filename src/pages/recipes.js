import { Title, Paper, SimpleGrid } from '@mantine/core';
import Layout from '../components/Layout/Layout';
import { apiConfig } from '../utils/apiConfig';
import CardComponent from '../components/Card';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useGetHooks } from '../hooks/useGetHooks';

const Recipes = () => {
  const [user, loading] = useAuthState(auth);
  const { getHealth, getDiet, getExcluded, getIncluded } = useGetHooks();

  const [health, setHealth] = useState(['alcohol-free']);
  const [diet, SetDiet] = useState(['high-fiber', 'low-carb']);
  const [excluded, setExcluded] = useState(['milk']);
  const [included, setIncluded] = useState(['egg', 'apple']);

  const [apiRequest, setRequest] = useState('');

  const [recipes, setRecipes] = useState([]);

  //API URL
  //   const apiRequest =

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      getHealth(userId, setHealth);
      getDiet(userId, SetDiet);
      getExcluded(userId, setExcluded);
      getIncluded(userId, setIncluded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, apiRequest]);

  useEffect(() => {
    // console.log(health);
    // console.log(diet);
    // console.log(excluded);
    // console.log(included);

    let dietString = '';
    let healthString = '';

    diet.map((d) => {
      dietString += '&diet=' + d;
    });

    health.map((h) => {
      healthString += '&health=' + h;
    });

    const newApiRequest =
      'https://api.edamam.com/api/recipes/v2?type=public&q=' +
      included +
      '&excluded=' +
      excluded +
      healthString +
      dietString +
      '&app_id=' +
      apiConfig.app_id +
      '&app_key=' +
      apiConfig.app_key +
      '&imageSize=SMALL';
    // ('&ingr=3-5&imageSize=SMALL&random=false&field=uri&field=label&field=image&field=url&field=ingredients');

    fetch(newApiRequest)
      .then((response) => response.json())
      .then((data) => {setRecipes(data.hits); console.log(data.hits)});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [included]);

  return (
    <Layout>
      <Title align='center' order={2} m='lg'>
        Recipies for you!
      </Title>
      <SimpleGrid
        cols={2}
        spacing='lg'
        breakpoints={[
          { maxWidth: 1200, cols: 2, spacing: 'lg' },
          { maxWidth: 980, cols: 1, spacing: 'md' },
          { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}
      >
        {recipes.map((recipe) => (
          <Paper key={recipe.recipe.uri}>
            <CardComponent recipe={recipe.recipe} />
          </Paper>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default Recipes;
