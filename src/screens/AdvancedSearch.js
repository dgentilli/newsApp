import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

import {Context} from '../../App';
import {
  Container,
  Button,
  ButtonText,
  Spacer,
  SecondaryHeading,
} from '../components/global/Main';
import theme from '../theme';

const Row = styled.View`
  display: flex;
  width: 100%;
  height: 110px;
  justify-content: center;
  align-items: center;
`;

const RowTitle = styled.Text`
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK}
  text-align: center;
`;

const SearchInput = styled.TextInput`
  width: 70%;
  height: ${props => props.height}px;
  border-width: 1px;
  border-color: ${theme.color.LIGHT_GRAY};
  border-radius: 20px;
  margin: 0 auto;
  padding: 7px;
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
`;

const FilterContainer = styled.View`
  width: 100%
  flex: 1;
  border-width: 1px;
  border-color: red;
`;

const AdvancedSearch = () => {
  const context = useContext(Context);
  const {theme} = context;
  const [queryValue, setQueryValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  //console.log('AdvancedSearch context: ', context);
  console.log({queryValue, filterValue});
  return (
    <Container theme={theme}>
      <Spacer height={20} />
      <SearchInput
        height={50}
        theme={theme}
        placeholder="Enter Search Terms"
        value={queryValue}
        onChangeText={input => setQueryValue(input)}
      />
      <Spacer height={10} />
      <FilterContainer>
        <Spacer height={5} />
        <SecondaryHeading>Filter Your Search</SecondaryHeading>
        <Row>
          <RowTitle>Publication Year</RowTitle>
          <SearchInput
            height={30}
            theme={theme}
            placeholder="Publication Year"
            value={filterValue}
            onChangeText={input => setFilterValue(input)}
            keyboardType="numeric"
          />
        </Row>
      </FilterContainer>
      <Spacer height={10} />
      <Button>
        <ButtonText>Search</ButtonText>
      </Button>
      <Spacer height={20} />
    </Container>
  );
};

export default AdvancedSearch;
