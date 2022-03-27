import {
  Paper,
  Title,
  Box,
  ScrollArea,
  Button,
  Divider,
  Checkbox,
} from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import {diets} from '../../utils/diet'
import DietCard from '../Cards/Diet'

const Diet = () => {
  return (
    <Paper shadow='xl' radius='md' p='md' withBorder>
      <Title order={3}>Diet</Title>
      <Divider my='sm' />
      <ScrollArea style={{ height: 300 }} type='always'>
        <>
          {diets.map((diet) => (
            <Paper key={diet.parameter}>
              <DietCard diet={diet}/>
            </Paper>
          ))}
        </>
      </ScrollArea>
      <Box align='center'>
        <Button color='pink'>
          Add Item <Plus />{' '}
        </Button>
      </Box>
    </Paper>
  );
};

export default Diet;
