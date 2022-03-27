import {
  Paper,
  Title,
  Box,
  ScrollArea,
  Button,
  Divider,
} from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import { diets } from '../../utils/diet';
import DietCard from '../Cards/Diet';
import { useGetHooks } from '../../hooks/useGetHooks';
import { useState, useEffect } from 'react';

const Diet = ({ userId }) => {
  const [dietParameters, setDietParameters] = useState([]);
  const { getDiet } = useGetHooks();

  useEffect(() => {
    if (userId) {
      getDiet(userId, setDietParameters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <Paper shadow='xl' radius='md' p='md' withBorder>
      <Title order={3}>Diet</Title>
      <Divider my='sm' />
      <ScrollArea style={{ height: 300 }} type='always'>
        <>
          {diets.map((diet) => (
            <Paper key={diet.parameter}>
              <DietCard
                userId={userId}
                diet={diet}
                dietParameters={dietParameters}
              />
            </Paper>
          ))}
        </>
      </ScrollArea>
    </Paper>
  );
};

export default Diet;
