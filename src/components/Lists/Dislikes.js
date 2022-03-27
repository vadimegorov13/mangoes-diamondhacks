import { Paper, Title, Box, ScrollArea, Button, Divider } from '@mantine/core';
import { Plus } from 'tabler-icons-react';

const Dislikes = () => {
  return (
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
  );
};

export default Dislikes;
