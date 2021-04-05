import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';

import theme from '../theme';
import {Context} from '../../App';

const SectionHeader = styled.Text`
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  margin: 0 5px;
`;

const NewsScrollHeader = ({section}) => {
  const context = useContext(Context);
  const {theme} = context;

  return (
    <>
      <SectionHeader theme={theme}>{section}</SectionHeader>
    </>
  );
};

export default NewsScrollHeader;
