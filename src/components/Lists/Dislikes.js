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
import Form from '../Forms/Dislikes';
import { useGetHooks } from '../../hooks/useGetHooks';
import { useEffect, useState } from 'react';
import DislikesCard from '../Cards/Dislikes';

const Dislikes = ({ userId }) => {
  const [opened, setOpened] = useState(false);
  const [update, setUpdate] = useState(false);

  const { getExcluded } = useGetHooks();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (userId) {
      getExcluded(userId, setIngredients);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, update]);

  const handleOpened = () => {
    setOpened(!opened);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  };


  return (
    <Paper shadow='xl' radius='md' p='md' withBorder>
      <Title order={3}>Dislikes</Title>
      <Divider my='sm' />
      <ScrollArea style={{ height: 300 }} type='always'>
        <>
          {ingredients.map((ingredient) => (
            <Paper key={ingredient}>
              <DislikesCard
                userId={userId}
                ingredient={ingredient}
                handleUpdate={handleUpdate}
              />
            </Paper>
          ))}
        </>
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
        <Form
          userId={userId}
          handleOpened={handleOpened}
          handleUpdate={handleUpdate}
        />
      </Modal>
    </Paper>
  );
};

export default Dislikes;
