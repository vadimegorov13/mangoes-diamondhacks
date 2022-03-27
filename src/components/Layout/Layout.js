import { useState } from 'react';
import { createStyles, AppShell, Navbar, Container } from '@mantine/core';
import NavbarMainLinks, { NavbarMainLink } from './NavbarMain';
import { auth } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Logout } from 'tabler-icons-react';
import HeaderMain from './Header'

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
    background:
      'linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
    borderRight: 1,
  },
  appShell: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gridGap: 8,
    background:
      'linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
  },
}));

const Layout = ({ children }) => {
  const { classes } = useStyles();
  const [user, loading] = useAuthState(auth);
  const [opened, setOpened] = useState(false);

  const logoutLink = {
    icon: <Logout size={16} />,
    color: 'grape',
    label: 'Logout',
    href: '/logout',
  };

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint='sm'
      className={classes.appShell}
      header={<HeaderMain user={user} opened={opened} setOpened={setOpened} />}
      navbar={
        <Navbar
          className={classes.navbar}
          width={{ base: '100%', sm: 0 }}
          hidden={!opened}
        >
          <Navbar.Section grow mt='xs'>
            <NavbarMainLinks loading={loading} user={user} />
          </Navbar.Section>
          {user ? (
            <Navbar.Section>
              <NavbarMainLink {...logoutLink} />
            </Navbar.Section>
          ) : null}
        </Navbar>
      }
    >
      <Container size='sm' px='md'>
        {children}
      </Container>
    </AppShell>
  );
};

export default Layout;
