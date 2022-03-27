import { TextInput, Grid, ActionIcon, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Plus } from 'tabler-icons-react';
import { useUpdateHooks } from '../../hooks/useUpdateHooks';

const Dislikes = ({ userId, handleOpened, handleUpdate }) => {
  const { addToExclude } = useUpdateHooks();

  const form = useForm({
    initialValues: {
      ingredient: '',
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx='auto'>
      <form
        onSubmit={form.onSubmit(async (values) => {
          await addToExclude(userId, values.ingredient);
          handleOpened();
          handleUpdate();
        })}
      >
        <Grid>
          <Grid.Col span={10}>
            <TextInput
              size='md'
              autoComplete='false'
              placeholder='ingredient'
              {...form.getInputProps('ingredient')}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <ActionIcon size='xl' type='submit' variant='filled' color='pink'>
              <Plus />
            </ActionIcon>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
};

export default Dislikes;
