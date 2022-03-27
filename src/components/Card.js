import {
  Card,
  Title,
  Text,
  Divider,
  Image,
  Button,
  Box,
  Anchor,
} from '@mantine/core';

const CardComponent = ({ recipe }) => {
  const ingr = recipe.ingredientLines;
  return (
    <Card shadow='sm' p='xl' component='a' target='_blank' m='lg'>
      <Card.Section>
        <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
          <Image radius='md' src={recipe.image} alt='food' mt='lg' />
        </div>
      </Card.Section>

      <Title weight={500} size='md' m='lg' color='pink'>
        {recipe.label}
      </Title>

      <Text m='lg'>
        <strong>Meal Type: </strong>
        {recipe.mealType}
      </Text>
      <Text m='lg'>
        <strong>Diet Labels: </strong>
        {recipe.dietLabels.map((d) => (
          <span key={d}>{d} </span>
        ))}
      </Text>
      <Text m='lg'>
        <strong>Health Labels: </strong>
        {recipe.healthLabels.map((d) => (
          <span key={d}>{d} </span>
        ))}
      </Text>
      <Divider />
      <Text weight={'bold'} mt='lg' mr='lg' ml='lg'>
        Ingredients:
      </Text>
      <Text>
        <ul>
          {ingr.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </Text>
      <Divider />

      <Box align='center' mt="lg">
        <Anchor href={recipe.url}>
          <Button>Open</Button>
        </Anchor>
      </Box>
    </Card>
  );
};

export default CardComponent;
