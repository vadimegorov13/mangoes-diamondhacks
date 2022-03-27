import { Paper, 
         Title, 
         Box, 
         ScrollArea, 
         Button, 
         Divider 
        } from '@mantine/core';
        import { Plus } from 'tabler-icons-react';
        import {health} from '../../utils/health'
        import HealthCard from '../Cards/Health'

const Health = () => {
  return (
    <Paper shadow='xl' radius='md' p='md' withBorder>
      <Title order={3}>Allergies/Health</Title>
      <Divider my='sm' />
      <ScrollArea style={{ height: 300 }} type='always'>
        <>
        {health.map((health) => (
          <Paper key={health.parameter}>
            <HealthCard health={health}/>
          </Paper>
        ))}</>
      </ScrollArea>
      <Box align='center'>
        <Button color='pink'>
          Add Item <Plus />{' '}
        </Button>
      </Box>
    </Paper>
  );
};

export default Health;
