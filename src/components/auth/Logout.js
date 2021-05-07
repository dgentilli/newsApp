import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';

import {Context} from '../../../App';
import {Button, ButtonText} from '../global/Main';

const Logout = () => {
  const context = useContext(Context);
  const navigation = useNavigation();
  const {
    loggedInUser,
    setUserInfo,
    signupUser,
    hasAccount,
    toggleLoginSignup,
    theme,
  } = context;

  console.log('from logout, loggedInUser', loggedInUser);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUserInfo(null);
        console.log('successful logout');
        navigation.navigate('AuthFlow', {
          theme,
          setUserInfo,
          signupUser,
          hasAccount,
          toggleLoginSignup,
        });
      })
      .catch(error => {
        console.log({error});
      });
  };

  return (
    <Button onPress={handleLogout}>
      <ButtonText>Logout</ButtonText>
    </Button>
  );
};

export default Logout;
