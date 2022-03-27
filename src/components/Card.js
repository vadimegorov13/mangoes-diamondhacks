import { Card, Title, Text, Divider, Image, Button, Box } from '@mantine/core';

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

      <Divider />
      <Text weight={'bold'} m='lg'>
        Ingredients:
      </Text>
      <Text>
        <ul>
          {ingr.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </Text>
      <Box align='center'>
        <Button>Open</Button>
      </Box>
    </Card>
  );
};

export default CardComponent;
