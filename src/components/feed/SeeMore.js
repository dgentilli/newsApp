import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

import {Context} from '../../../App';
import theme from '../../theme';
import {HorizontalCardContainer} from '../global/Main';

const SeeMoreText = styled.Text`
  text-align: center;
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 500;
`;

const GenericTextContainer = styled.View`
  margin-top: 50%;
  transform: translateY(-10px);
`;

const SeeMore = ({section}) => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const {theme} = context;
  //console.log('seemore section', section);

  return (
    <HorizontalCardContainer
      onPress={() => navigation.navigate('NewsListByCategory', {section})}>
      <GenericTextContainer>
        <SeeMoreText theme={theme}>See More</SeeMoreText>
        <SeeMoreText theme={theme}>From {section}</SeeMoreText>
      </GenericTextContainer>
    </HorizontalCardContainer>
  );
};

export default SeeMore;
