import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import theme from '../theme';
import {Context} from '../../App';
import {Container, Spacer, PrimaryHeading} from '../components/reusable/Main';

const NewsCardHorizontal = () => {
  return (
    <Container style={{height: 50}}>
      <PrimaryHeading>News Card Horizontal</PrimaryHeading>
    </Container>
  );
};

export default NewsCardHorizontal;
