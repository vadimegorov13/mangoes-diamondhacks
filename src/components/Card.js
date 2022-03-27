import { Link } from 'react-router-dom';
import { createStyles, Card, Image, Text } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  cardStyle: {
    maxWidth: "30rem",
    width: "1rem",
  },
}));

const CardComponent = () => {
    const classes = useStyles()

    var query = ['peanut-free'];
    const apiRequest = 'https://api.edamam.com/api/recipes/v2?type=public&q=' + query +'&app_id=37a2ad96&app_key=9be81d361261c971e127ad0982138d5f&ingr=3-5&cuisineType=American&imageSize=SMALL&random=false&field=uri&field=label&field=image&field=url'
    console.log(apiRequest);


  return (
    <Card
      shadow="sm"
      p="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image src="unsplash.png" height={160} alt="No way!" />
      </Card.Section>

      <Text weight={500} size="lg">
        Recipe Name
      </Text>

      <Text size="sm">
        Recipe Description slkdfjlska;jflkdfj
      </Text>
    </Card>
  );
}

export default CardComponent;
