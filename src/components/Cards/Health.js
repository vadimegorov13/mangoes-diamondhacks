import { Checkbox, Group, Paper, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useUpdateHooks } from '../../hooks/useUpdateHooks';

const Health = ({userId, health, healthParameters}) => {
  const [checked, setChecked] = useState(false);
  const { updateHealth } = useUpdateHooks();

  useEffect(() => {
    if (healthParameters !== undefined) {
      healthParameters.find((element) => {
        if (element === health.parameter) {
          setChecked(true);
        }
      });
    }
  }, [healthParameters, setChecked, health]);

  const handleChange = (event) => {
    setChecked(event.currentTarget.checked);
    let newParams = [];
    if (healthParameters !== undefined) {
      newParams = healthParameters;
    }

    if (!newParams.includes(health.parameter)) {
      newParams.push(health.parameter);
      console.log('add');
    } else {
      newParams.pop(health.parameter);
      console.log('remove');
    }

    updateHealth(userId, newParams);
  };

  return (
    <Paper shadow='xl' radius='md' p='sm' withBorder>
      <Group>
        <Checkbox checked={checked} onChange={handleChange} size='md' />
        <Text size='lg'>{health.label}</Text>
      </Group>
    </Paper>
  );
};

export default Health;
