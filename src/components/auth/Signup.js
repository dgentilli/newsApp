import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  Container,
  PrimaryHeading,
  SecondaryHeading,
  Button,
  ButtonText,
  Spacer,
  FormInput,
} from '../global/Main';
import ErrorDisplay from '../global/ErrorDisplay';
import AnonymousLogin from './AnonymousLogin';

const Signup = ({theme, signupUser, setUserInfo, toggleLoginSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userMessage, setUserMessage] = useState(null);
  const [error, setError] = useState(false);

  const signupNewUser = () => {
    //console.log('onButtonPress fired ************************');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        var user = userCredential.user;
        setUserMessage('Successful Signup!');
        signupUser();
        //console.log({user});
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(true);
        setUserMessage(errorMessage);
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  return (
    <Container theme={theme}>
      <Spacer height={30} />
      {error ? (
        <>
          <ErrorDisplay theme={theme} msg={userMessage} />
          <Spacer height={10} />
        </>
      ) : null}
      <PrimaryHeading theme={theme}>Signup</PrimaryHeading>
      <Spacer height={30} />
      <AnonymousLogin
        theme={theme}
        setUserInfo={setUserInfo}
        setUserMessage={setUserMessage}
        setError={setError}
      />
      <Spacer height={30} />
      <SecondaryHeading>Already Know You'll Love The App?</SecondaryHeading>
      <SecondaryHeading>Sign Up With Email And Password!</SecondaryHeading>
      <Spacer height={10} />
      <FormInput
        height={50}
        theme={theme}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => setEmail(text)}
      />
      <Spacer height={5} />
      <FormInput
        height={50}
        theme={theme}
        value={password}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => setPassword(text)}
      />
      <Spacer height={10} />
      <Button onPress={() => signupNewUser()}>
        <ButtonText>Sign up!</ButtonText>
      </Button>
      <Spacer height={30} />
      <Button onPress={toggleLoginSignup}>
        <ButtonText>Already signed up?</ButtonText>
      </Button>
    </Container>
  );
};

export default Signup;
