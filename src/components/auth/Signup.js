import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import theme from '../../theme';

import {
  Container,
  PrimaryHeading,
  SecondaryHeading,
  Button,
  ButtonText,
  Spacer,
  FormInput,
} from '../global/Main';

const Signup = ({theme, signupUser, setUserInfo, toggleLoginSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleAnonymousLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        getUserInfo();
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setLoginError(
          `Error: ${errorCode}. Please try again in a few minutes.`,
        );
      });
  };

  const getUserInfo = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const userData = {
          userId: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
        };
        setUserInfo(userData);
      } else {
        setUserInfo(null);
        setLoginError(
          'Something went wrong. Please try again in a few minutes.',
        );
      }
    });
  };
  return (
    <Container theme={theme}>
      <Spacer height={30} />
      <PrimaryHeading theme={theme}>Signup</PrimaryHeading>
      <Spacer height={30} />
      <SecondaryHeading theme={theme}>Just Passing By?</SecondaryHeading>
      <SecondaryHeading theme={theme}>Login As A Guest</SecondaryHeading>
      <Spacer height={10} />
      <Button onPress={() => handleAnonymousLogin()}>
        <ButtonText>Guest Login</ButtonText>
      </Button>
      <Spacer height={30} />
      <Button onPress={() => signupUser()}>
        <ButtonText>Sign up!</ButtonText>
      </Button>
      <Spacer height={30} />
      <SecondaryHeading>Already Know You'll Love The App?</SecondaryHeading>
      <SecondaryHeading>Sign Up With Email And Password!</SecondaryHeading>
      <Spacer height={10} />
      <FormInput
        height={50}
        theme={theme}
        value={email}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <Spacer height={5} />
      <FormInput
        height={50}
        theme={theme}
        value={password}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
      />
      <Spacer height={30} />
      <Button onPress={toggleLoginSignup}>
        <ButtonText>Already signed up?</ButtonText>
      </Button>
    </Container>
  );
};

export default Signup;
