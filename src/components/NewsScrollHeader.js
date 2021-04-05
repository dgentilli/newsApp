import React, {useContext} from 'react';
import styled from 'styled-components';

import theme from '../theme';
import {Context} from '../../App';

const SectionHeader = styled.Text`
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  font-size: 18px;
  text-align: left;
  text-transform: capitalize;
  margin: 0 5px;
  width: auto;
  padding: 7px;
`;

const NewsScrollHeader = ({title}) => {
  const context = useContext(Context);
  const {theme} = context;

  return (
    <>
      <SectionHeader theme={theme}>{title}</SectionHeader>
    </>
  );
};

export default NewsScrollHeader;
