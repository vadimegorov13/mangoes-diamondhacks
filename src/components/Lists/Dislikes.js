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
import { useState } from 'react';

const Dislikes = ({ userId }) => {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!opened);
  };

  return (
    <Paper shadow='xl' radius='md' p='md' withBorder>
      <Title order={3}>Dislikes</Title>
      <Divider my='sm' />
      <ScrollArea style={{ height: 300 }} type='always'></ScrollArea>
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

export default Dislikes;
