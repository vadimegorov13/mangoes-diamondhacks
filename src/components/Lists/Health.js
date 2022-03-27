import { Paper, Title, Box, ScrollArea, Button, Divider } from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import { health as healthList} from '../../utils/health';
import HealthCard from '../Cards/Health';
import { useGetHooks } from '../../hooks/useGetHooks';
import { useState, useEffect } from 'react';

const Health = ({ userId }) => {
  const [healthParameters, setHealthParameters] = useState([]);
  const { getHealth } = useGetHooks();

  useEffect(() => {
    if (userId) {
      getHealth(userId, setHealthParameters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <Paper shadow='xl' radius='md' p='md' withBorder>
      <Title order={3}>Allergies/Health</Title>
      <Divider my='sm' />
      <ScrollArea style={{ height: 300 }} type='always'>
        <>
          {healthList.map((health) => (
            <Paper key={health.parameter}>
              <HealthCard
                userId={userId}
                health={health}
                healthParameters={healthParameters}
              />
            </Paper>
          ))}
        </>
      </ScrollArea>
    </Paper>
  );
};

export default Health;
