import { Checkbox, Group, Paper, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useUpdateHooks } from '../../hooks/useUpdateHooks';

const Diet = ({ userId, diet, dietParameters }) => {
  const [checked, setChecked] = useState(false);
  const { updateDiet } = useUpdateHooks();

  useEffect(() => {
    if (dietParameters !== undefined) {
      dietParameters.find((element) => {
        if (element === diet.parameter) {
          setChecked(true);
        }
      });
    }
  }, [dietParameters, setChecked, diet]);

  const handleChange = (event) => {
    setChecked(event.currentTarget.checked);
    let newParams = [];
    if (dietParameters !== undefined) {
      newParams = dietParameters;
    }

    if (!newParams.includes(diet.parameter)) {
      newParams.push(diet.parameter);
      console.log('add');
    } else {
      newParams.pop(diet.parameter);
      console.log('remove');
    }

    updateDiet(userId, newParams);
  };

  return (
    <Paper shadow='xl' radius='md' p='sm' withBorder>
      <Group>
        <Checkbox checked={checked} onChange={handleChange} size='md' />
        <Text size='lg'>{diet.label}</Text>
      </Group>
    </Paper>
  );
};

export default Diet;
