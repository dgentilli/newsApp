import React, {useState} from 'react';

import {
  Container,
  PrimaryHeading,
  Button,
  ButtonText,
  Spacer,
} from '../global/Main';

const Login = ({theme, authenticateUser, toggleLoginSignup}) => {
  return (
    <Container theme={theme}>
      <PrimaryHeading theme={theme}>Login</PrimaryHeading>
      <Button onPress={() => authenticateUser()}>
        <ButtonText>Login</ButtonText>
      </Button>
      <Spacer height={10} />
      <Button onPress={toggleLoginSignup}>
        <ButtonText>Need to sign up?</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;
