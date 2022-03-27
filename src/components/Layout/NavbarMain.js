import { UnstyledButton, Group, Text, ThemeIcon } from '@mantine/core';
import { InfoSquare, SmartHome, History, Star } from 'tabler-icons-react';
import Link from 'next/link';

export const NavbarMainLink = ({ icon, color, label, href }) => {
  return (
    <Link href={href} passHref={true}>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          backgroundColor: href === '/logout' ? '#eeaeca' : 'inherit',
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant='light'>
            {icon}
          </ThemeIcon>

          <Text size='lg' weight='500' color='black'>
            {label}
          </Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
};

const data = [
  { icon: <SmartHome size={16} />, color: 'blue', label: 'Home', href: '/' },
  {
    icon: <InfoSquare size={16} />,
    color: 'teal',
    label: 'About',
    href: '/about',
  },
];

const loggedInData = [
  { icon: <SmartHome size={16} />, color: 'blue', label: 'Home', href: '/' },
  {
    icon: <InfoSquare size={16} />,
    color: 'teal',
    label: 'About',
    href: '/about',
  },
  {
    icon: <History size={16} />,
    color: 'violet',
    label: 'Favorite',
    href: '/history',
  },
  {
    icon: <Star size={16} />,
    color: 'grape',
    label: 'History',
    href: '/favorite',
  },
];

const NavbarMainLinks = ({ loading, user }) => {
  let links = null;

  if (loading) {
    links = null;
  } else if (!user) {
    links = data.map((link) => <NavbarMainLink {...link} key={link.label} />);
  } else {
    links = loggedInData.map((link) => (
      <NavbarMainLink {...link} key={link.label} />
    ));
  }

  return <div>{links}</div>;
};

export default NavbarMainLinks;
