import { Checkbox, Title } from '@mantine/core';

const Diet = ({ diet }) => {
  return <Checkbox label={<Title order={4}>{diet.label}</Title>} />;
};

export default Diet;
