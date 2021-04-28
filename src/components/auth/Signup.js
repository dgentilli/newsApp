import React, {useState} from 'react';

import {
  Container,
  PrimaryHeading,
  Button,
  ButtonText,
  Spacer,
} from '../global/Main';

const Signup = ({theme, signupUser, toggleLoginSignup}) => {
  return (
    <Container theme={theme}>
      <PrimaryHeading theme={theme}>Signup</PrimaryHeading>
      <Button onPress={() => signupUser()}>
        <ButtonText>Sign up!</ButtonText>
      </Button>
      <Spacer height={10} />
      <Button onPress={toggleLoginSignup}>
        <ButtonText>Already signed up?</ButtonText>
      </Button>
    </Container>
  );
};

export default Signup;
