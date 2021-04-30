import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import styled from 'styled-components';

import {
  Container,
  PrimaryHeading,
  SecondaryHeading,
  Button,
  ButtonText,
  Spacer,
} from '../global/Main';
import theme from '../../theme';

const FormInput = styled.TextInput`
  width: 70%;
  height: ${props => props.height}px;
  border-width: 1px;
  border-color: ${theme.color.LIGHT_GRAY};
  border-radius: 20px;
  margin: 0 auto;
  padding: 12px;
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
`;

const Login = ({theme, setUserInfo, toggleLoginSignup}) => {
  const [loginError, setLoginError] = useState(null);
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

  return !loginError ? (
    <Container theme={theme}>
      <Spacer height={30} />
      <PrimaryHeading theme={theme}>Login</PrimaryHeading>
      <Spacer height={30} />
      <SecondaryHeading theme={theme}>Just Passing By?</SecondaryHeading>
      <SecondaryHeading theme={theme}>Login As A Guest</SecondaryHeading>
      <Spacer height={10} />
      <Button onPress={() => handleAnonymousLogin()}>
        <ButtonText>Guest Login</ButtonText>
      </Button>
      <Spacer height={30} />
      <SecondaryHeading>Already Have An Account?</SecondaryHeading>
      <SecondaryHeading>Login With Your Email And Password</SecondaryHeading>
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
        <ButtonText>Need To Sign Up?</ButtonText>
      </Button>
    </Container>
  ) : (
    <Container theme={theme}>
      <Spacer height={30} />
      <SecondaryHeading theme={theme}>
        {loginError
          ? loginError
          : 'Something went wrong. Please try again in a few mintes.'}
      </SecondaryHeading>
    </Container>
  );
};

export default Login;
