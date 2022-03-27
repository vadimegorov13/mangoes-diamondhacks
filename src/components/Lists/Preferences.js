import {
  Paper,
  Title,
  Box,
  ScrollArea,
  Button,
  Divider,
  Modal,
} from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import { useEffect, useState } from 'react';
import Form from '../Forms/Preferences';
import { useGetHooks } from '../../hooks/useGetHooks';

const Preferences = ({ userId }) => {
  const [opened, setOpened] = useState(false);
  
  const { getIncluded } = useGetHooks();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (userId) {
      getIncluded(userId, setIngredients);
    }
  }, [userId, getIncluded]);

  const handleOpened = () => {
    setOpened(!opened);
  };

  return (
    <Paper shadow='xl' radius='md' p='md' withBorder>
      <Title order={3}>Preferences</Title>
      <Divider my='sm' />
      <ScrollArea style={{ height: 300 }} type='always'>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </ScrollArea>
      <Box align='center'>
        <Button color='pink' onClick={handleOpened}>
          Add Item <Plus />
        </Button>
      </Box>
      <Modal
        opened={opened}
        onClose={handleOpened}
        title={<Title mb={8}>Add Ingredient</Title>}
      >
        <Form userId={userId} handleOpened={handleOpened} />
      </Modal>
    </Paper>
  );
};

export default Preferences;
