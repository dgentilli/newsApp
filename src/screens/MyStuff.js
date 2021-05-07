import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

import theme from '../theme';
import {Context} from '../../App';
import {Container, Spacer, PrimaryHeading} from '../components/global/Main';
import Logout from '../components/auth/Logout';

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 75px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.color.LIGHT_GRAY};
`;

const CustomText = styled.Text`
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  font-size: 16px;
`;

const MyStuff = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  //console.log('MyStuff context: ', context);
  const {loggedInUser, theme, toggleTheme} = context;
  return (
    <Container theme={theme}>
      <Spacer height={20} />
      <PrimaryHeading theme={theme}>MyStuff Screen</PrimaryHeading>
      <Spacer height={30} />
      <Row>
        <CustomText theme={theme}>Theme Preferences</CustomText>
        <TouchableOpacity onPress={toggleTheme}>
          <CustomText theme={theme}>{theme}</CustomText>
        </TouchableOpacity>
      </Row>
      <Row>
        <TouchableOpacity
          onPress={() => navigation.navigate('SetNewsPreferences')}>
          <CustomText theme={theme}>Set News Preferences</CustomText>
        </TouchableOpacity>
      </Row>
      <Spacer height={30} />
      <Logout />
    </Container>
  );
};

export default MyStuff;
