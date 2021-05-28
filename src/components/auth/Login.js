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
import PasswordReset from './PasswordReset';

const Login = ({theme, setUserInfo, toggleLoginSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [userMessage, setUserMessage] = useState(null);

  React.useEffect(() => {
    return () => {
      setUserMessage(null);
      setEmail('');
      setPassword('');
      setError(false);
    };
  }, []);

  const loginExistingUser = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log('user from login', user);
        console.log('Successful Login!');
        getUserInfo();
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
        setError('Something went wrong. Please try again in a few minutes.');
      }
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
      <PrimaryHeading theme={theme}>Login</PrimaryHeading>
      <Spacer height={30} />
      <AnonymousLogin
        theme={theme}
        setUserInfo={setUserInfo}
        setUserMessage={setUserMessage}
        setError={setError}
      />
      <Spacer height={30} />
      <SecondaryHeading theme={theme}>
        Already Have An Account?
      </SecondaryHeading>
      <SecondaryHeading theme={theme}>
        Login With Your Email And Password
      </SecondaryHeading>
      <Spacer height={10} />
      <FormInput
        height={50}
        theme={theme}
        value={email}
        placeholder="Email"
        placeholderTextColor={theme === 'dark' ? '#f8f9faff' : '#495057ff'}
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
        placeholderTextColor={theme === 'dark' ? '#f8f9faff' : '#495057ff'}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Spacer height={10} />

      <Button onPress={loginExistingUser}>
        <ButtonText>Login With Account</ButtonText>
      </Button>
      <Spacer height={30} />
      <Button onPress={toggleLoginSignup}>
        <ButtonText>Need To Sign Up?</ButtonText>
      </Button>
      <Spacer height={30} />
      <PasswordReset theme={theme} />
    </Container>
  );
};

export default Login;
