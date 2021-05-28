import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import styled from 'styled-components';

import theme from '../../theme';
import {FormInput, Spacer, Button, ButtonText} from '../global/Main';
const ResetLink = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-self: center;
  display: flex;
  justify-content: center;
`;

const PasswordResetText = styled.Text`
  font-size: 16px;
  color: ${theme.color.SKY_BLUE};
  text-align: center;
`;

const PasswordReset = ({theme}) => {
  const [displayEmailInput, setDisplayEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const auth = firebase.auth();
  const emailAddress = email;

  React.useEffect(() => {
    setDisplayEmailInput(false);
    setUserMessage('');
  }, []);

  const handlePress = () => {
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        // Email sent.
        console.log('Email Sent');
        setUserMessage('Success! Check your email for the reset link.');
      })
      .catch(function (error) {
        // An error happened.
        setUserMessage(
          'Something went wrong. Please double check your email address.',
        );
      });
  };

  return !displayEmailInput ? (
    <ResetLink onPress={() => setDisplayEmailInput(true)}>
      <PasswordResetText>Reset Password</PasswordResetText>
    </ResetLink>
  ) : (
    <>
      <Spacer height={30} />
      <FormInput
        value={email}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => setEmail(text)}
        theme={theme}
        placeholderTextColor={theme === 'dark' ? '#f8f9faff' : '#495057ff'}
        height={40}
      />
      <Spacer height={20} />
      <Button onPress={handlePress}>
        <ButtonText>Submit</ButtonText>
      </Button>
      <Spacer height={20} />
      <PasswordResetText>{userMessage}</PasswordResetText>
    </>
  );
};

export default PasswordReset;
