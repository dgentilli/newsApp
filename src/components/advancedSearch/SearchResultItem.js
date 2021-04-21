import React, {useContext} from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components';

import theme from '../../theme';
import {Context} from '../../../App';
import {Abstract} from '../global/Main';

const ResultItemContainer = styled.View`
  width: 98%;
  height: 115px;
  margin: 0 auto;
  border-bottom-width: 1px;
  border-color: ${theme.color.LIGHT_GRAY};
  display: flex;
  margin-top: 7px;
`;

const Row = styled.View`
  width: 100%;
  height: 30px;
  flex: ${props => props.flex};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const RowItem = styled.Text`
  flex: 1;
  font-size: 12px;
  font-weight: 500;
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  padding: 0 10px 5px;
  line-height: 18px;
`;

const ArticleLink = styled.TouchableOpacity`
  flex: 1;
  color: ${theme.color.SKY_BLUE};
`;

const LinkText = styled.Text`
  color: ${theme.color.SKY_BLUE};
  font-weight: 700;
  font-size: 12px;
  padding: 0 10px 5px;
  line-height: 18px;
`;

const SearchResultItem = ({articleData}) => {
  const context = useContext(Context);
  const {theme} = context;
  const {abstract, section_name, web_url, word_count} = articleData;
  //console.log({headline});
  const abstractDisplay =
    abstract.length > 175 ? `${abstract.slice(0, 175)}...` : abstract;
  return (
    <ResultItemContainer theme={theme}>
      <Row flex={2}>
        <Abstract theme={theme}>...{abstractDisplay}</Abstract>
      </Row>
      <Row flex={1}>
        <RowItem theme={theme}>Section: {section_name}</RowItem>
        <RowItem theme={theme}>Words: {word_count}</RowItem>
        <ArticleLink onPress={() => Linking.openURL(web_url)}>
          <LinkText>Link to Article</LinkText>
        </ArticleLink>
      </Row>
    </ResultItemContainer>
  );
};

export default SearchResultItem;
