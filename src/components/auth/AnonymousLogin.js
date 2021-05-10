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
  FormInput,
} from '../global/Main';

const AnonymousLogin = ({theme, setUserInfo, setUserMessage, setError}) => {
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
        setError(true);
        setUserMessage(
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
        setError('Something went wrong. Please try again in a few minutes.');
      }
    });
  };

  return (
    <>
      <SecondaryHeading theme={theme}>Just Passing By?</SecondaryHeading>
      <SecondaryHeading theme={theme}>Login As A Guest</SecondaryHeading>
      <Spacer height={10} />
      <Button onPress={() => handleAnonymousLogin()}>
        <ButtonText>Guest Login</ButtonText>
      </Button>
    </>
  );
};

export default AnonymousLogin;
