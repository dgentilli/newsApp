import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

import {Context} from '../../App';
import {
  Container,
  Button,
  ButtonText,
  Spacer,
  SecondaryHeading,
  PrimaryHeading,
} from '../components/global/Main';
import theme from '../theme';

const SearchDisplay = ({route}) => {
  const context = useContext(Context);
  const {theme} = context;
  const {articles} = route.params;
  console.log('Search Display Articles, ', articles);

  return (
    <Container theme={theme}>
      <PrimaryHeading theme={theme}>Search Display</PrimaryHeading>
    </Container>
  );
};

export default SearchDisplay;
