import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';

import {Context} from '../../../App';
import {Button, ButtonText} from '../global/Main';
import ErrorDisplay from '../global/ErrorDisplay';

const Logout = () => {
  const context = useContext(Context);
  const [error, setError] = useState(false);
  const navigation = useNavigation();
  const {
    loggedInUser,
    setUserInfo,
    signupUser,
    hasAccount,
    toggleLoginSignup,
    theme,
  } = context;

  //console.log('from logout, loggedInUser', loggedInUser);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('successful logout');
        navigation.navigate('AuthFlow');
      })
      .catch(error => {
        console.log({error});
        //setError(true);
      });
  };

  return (
    <>
      <Button onPress={handleLogout}>
        <ButtonText>Logout</ButtonText>
      </Button>
      {error && (
        <ErrorDisplay theme={theme} msg={'Logout Failed. Please try again.'} />
      )}
    </>
  );
};

export default Logout;
