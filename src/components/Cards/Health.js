import { Checkbox, Title } from '@mantine/core';

const Health = ({ health }) => {
  return <Checkbox label={<Title order={4}>{health.label}</Title>} />;
};

export default Health;
