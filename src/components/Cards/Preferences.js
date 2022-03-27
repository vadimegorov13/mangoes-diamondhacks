import { Grid, Paper, Text, ActionIcon } from '@mantine/core';
import { Trash } from 'tabler-icons-react';
import { useUpdateHooks } from '../../hooks/useUpdateHooks';

const Preferences = ({ userId, ingredient, handleUpdate }) => {
  const { removeFromInclude } = useUpdateHooks();

  const handleDelete = () => {
    if (userId) removeFromInclude(userId, ingredient);
    handleUpdate();
  };

  return (
    <Paper shadow='xl' radius='md' p='sm' withBorder>
      <Grid>
        <Grid.Col span={10}>
          <Text size='lg'>{ingredient}</Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <ActionIcon color='error' onClick={handleDelete}>
            <Trash />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default Preferences;
