import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {auth} from "../firebase/firebase"
import { Card, Title, createStyles, Avatar } from '@mantine/core';
import { Lock } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  cardStyle: {
    maxWidth: '30rem',
    width: '1rem'
  },
}));

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

const SignInComponent = () => {
  const classes = useStyles()

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow='sm' className={classes.cardStyle}>
        <div align='center'>
          <Avatar color='blue' radius='lg' size='lg'>
            <Lock size={40} />
          </Avatar>
        </div>

        <Title size='lg' align='center'>
          Sign In
        </Title>
        <Card.Section mb={2}>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Card.Section>
      </Card>
    </div>
  );
}

export default SignInComponent;
