import React, {useState, useContext} from 'react';

import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';
import {
  Container,
  PrimaryHeading,
  Button,
  ButtonText,
  Spacer,
} from '../components/global/Main';

const AuthFlow = ({
  theme,
  setUserInfo,
  signupUser,
  hasAccount,
  toggleLoginSignup,
}) => {
  return hasAccount ? (
    <Login
      theme={theme}
      setUserInfo={setUserInfo}
      hasAccount={hasAccount}
      toggleLoginSignup={toggleLoginSignup}
    />
  ) : (
    <Signup
      theme={theme}
      setUserInfo={setUserInfo}
      signupUser={signupUser}
      hasAccount={hasAccount}
      toggleLoginSignup={toggleLoginSignup}
    />
  );
};

export default AuthFlow;
