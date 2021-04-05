import React, {useContext} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import theme from '../theme';
import {Context} from '../../App';
import {Container, Spacer, PrimaryHeading} from '../components/reusable/Main';

const {width} = Dimensions.get('window');

const HorizontalCardContainer = styled.View`
  width: ${0.8 * width}px;
  height: 300px;
  border-width: 1px;
  border-color: green;
`;

const NewsCardHorizontal = () => {
  return (
    <HorizontalCardContainer>
      <PrimaryHeading>News Card Horizontal</PrimaryHeading>
    </HorizontalCardContainer>
  );
};

export default NewsCardHorizontal;
