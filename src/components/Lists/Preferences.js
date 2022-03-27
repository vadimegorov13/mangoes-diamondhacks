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
import PreferencesCard from '../Cards/Preferences'

const Preferences = ({ userId }) => {
  const [opened, setOpened] = useState(false);
  const [update, setUpdate] = useState(false);
  
  const { getIncluded } = useGetHooks();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (userId) {
      getIncluded(userId, setIngredients);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, update]);

  const handleOpened = () => {
    setOpened(!opened);
  };

  const handleUpdate = () => {
    setUpdate(!update);
  }

  return (
    <Paper shadow='xl' radius='md' p='md' withBorder>
      <Title order={3}>Preferences</Title>
      <Divider my='sm' />
      <ScrollArea style={{ height: 300 }} type='always'>
        <>
          {ingredients.map((ingredient) => (
            <Paper key={ingredient}>
              <PreferencesCard
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

export default Preferences;
