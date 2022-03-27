import {
  createStyles,
  Header,
  Burger,
  MediaQuery,
  Container,
  Box,
  Group,
  Text,
  Title,
  UnstyledButton,
  ThemeIcon,
} from '@mantine/core';
import { Logout, ListDetails } from 'tabler-icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
    display: 'flex',
    width: '100%',
  },
  header: {
    background: '#B4CFEF',
    borderBottom: 1,
  },
  leftNav: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    display: 'block',
    borderRadius: theme.radius.sm,
    color: 'black',

    '&:hover': {
      backgroundColor: 'white',
    },
  },
  logoutButton: {
    display: 'block',
    borderRadius: theme.radius.sm,
    color: 'black',
    backgroundColor: '#eeaeca',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}));

const HeaderMain = ({ user, opened, setOpened }) => {
  const { classes } = useStyles();

  return (
    <Header height={50} className={classes.header}>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size='lg'
          mr='xl'
          color='#eeaaaf'
        />
      </MediaQuery>
      <Group
        className={classes.links}
        sx={{ height: '100%' }}
        px={20}
        position='apart'
      >
        <Box className={classes.leftNav}>
          <Link href='/' passHref={true}>
            <UnstyledButton>
              <Group>
                <ThemeIcon color='pink' variant='light'>
                  <ListDetails />
                </ThemeIcon>

                <Title order={2}>Mangoes</Title>
              </Group>
            </UnstyledButton>
          </Link>
          <Link href='/about' passHref={true}>
            <UnstyledButton className={classes.button} ml='sm'>
              <Text mx='sm' weight={500}>
                About
              </Text>
            </UnstyledButton>
          </Link>
        </Box>
        {user ? (
          <Box className={classes.leftNav}>
            <Link href='/history' passHref={true}>
              <UnstyledButton className={classes.button} ml='sm'>
                <Text mx='sm' weight={500} py={6}>
                  History
                </Text>
              </UnstyledButton>
            </Link>
            <Link href='/favorite' passHref={true}>
              <UnstyledButton className={classes.button} ml='sm'>
                <Text mx='sm' weight={500} py={6}>
                  Favorite
                </Text>
              </UnstyledButton>
            </Link>
            <Link href='/logout' passHref={true}>
              <UnstyledButton className={classes.logoutButton} ml='sm'>
                <Text mx='sm' weight={500} py={6}>
                  Logout
                </Text>
              </UnstyledButton>
            </Link>
          </Box>
        ) : null}
      </Group>
    </Header>
  );
};

export default HeaderMain;
