import React, {useContext, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const axios = require('axios');
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

import {NYT_API_KEY} from '@env';

const Row = styled.View`
  display: flex;
  width: 100%;
  height: 80px;
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
`;

const AdvancedSearch = () => {
  const context = useContext(Context);
  const {theme} = context;
  const [queryValue, setQueryValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [pubYear, setPubYear] = useState(null);
  const [location, setLocation] = useState('');
  const [source, setSource] = useState('');
  const [headline, setHeadline] = useState('');
  const [newsDesk, setNewsDesk] = useState('');
  const [section, setSection] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (queryValue.length < 1) {
      Alert.alert('Please enter a search term');
      return;
    }
    try {
      let filterString = `pub_year:(${pubYear}) AND location:(${location}) AND source:(${source}) 
      AND headline:(${headline}) AND news_desk:(${newsDesk}) AND section:(${section})`;

      setFilterValue(filterString);
      let root = `https://api.nytimes.com/svc/search/v2`;
      let response = await axios.get(
        `${root}/articlesearch.json?q=${queryValue}&api-key=${NYT_API_KEY}&fq=${filterValue}`,
      );

      let articleData =
        response &&
        response.status === 200 &&
        response.data &&
        (await response.data.response.docs);

      //console.log('response.data.response.docs', response.data.response.docs);
      clearValues();
      navigation.navigate('SearchDisplay', {
        articles: [...articleData],
      });
    } catch (err) {
      console.log({err});
    }
  };

  const clearValues = () => {
    setQueryValue('');
    setFilterValue('');
    setPubYear(null);
    setLocation('');
    setSource('');
    setHeadline('');
    setNewsDesk('');
    setSection('');
  };

  return (
    <ScrollView>
      <Container theme={theme}>
        <Spacer height={10} />
        <PrimaryHeading theme={theme}>Enter Your Search Terms</PrimaryHeading>
        <Spacer height={10} />
        <SearchInput
          height={40}
          theme={theme}
          placeholder="Enter Search Terms"
          value={queryValue}
          onChangeText={input => setQueryValue(input)}
        />
        <Spacer height={20} />
        <FilterContainer>
          <Spacer height={5} />
          <SecondaryHeading theme={theme}>Filter Your Search</SecondaryHeading>
          <Spacer height={10} />
          <Row>
            <RowTitle theme={theme}>Publication Year</RowTitle>
            <Spacer height={5} />
            <SearchInput
              height={30}
              theme={theme}
              placeholder="Publication Year"
              value={pubYear}
              onChangeText={input => setPubYear(input)}
              keyboardType="numeric"
            />
          </Row>
          <Row>
            <RowTitle theme={theme}>Location (Ex: New York City)</RowTitle>
            <Spacer height={5} />
            <SearchInput
              height={30}
              theme={theme}
              placeholder="Location"
              value={location}
              onChangeText={input => setLocation(input)}
            />
          </Row>
          <Row>
            <RowTitle theme={theme}>Source (Ex: Reuters)</RowTitle>
            <Spacer height={5} />
            <SearchInput
              height={30}
              theme={theme}
              placeholder="Source"
              value={source}
              onChangeText={input => setSource(input)}
            />
          </Row>
          <Row>
            <RowTitle theme={theme}>Headline</RowTitle>
            <Spacer height={5} />
            <SearchInput
              height={30}
              theme={theme}
              placeholder="Headline"
              value={headline}
              onChangeText={input => setHeadline(input)}
            />
          </Row>
          <Row>
            <RowTitle theme={theme}>News Desk</RowTitle>
            <Spacer height={5} />
            <SearchInput
              height={30}
              theme={theme}
              placeholder="News Desk"
              value={newsDesk}
              onChangeText={input => setNewsDesk(input)}
            />
          </Row>
          <Row>
            <RowTitle theme={theme}>Section</RowTitle>
            <Spacer height={5} />
            <SearchInput
              height={30}
              theme={theme}
              placeholder="Headline"
              value={section}
              onChangeText={input => setSection(input)}
            />
          </Row>
        </FilterContainer>
        <Spacer height={10} />
        <Button onPress={handleSubmit}>
          <ButtonText>Search</ButtonText>
        </Button>
        <Spacer height={20} />
      </Container>
    </ScrollView>
  );
};

export default AdvancedSearch;
