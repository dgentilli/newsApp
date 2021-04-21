import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

import {Context} from '../../App';
import {Container, Spacer, PrimaryHeading} from '../components/global/Main';
import NewsCardVertical from '../components/global/NewsCardVertical';
import SearchResultItem from '../components/advancedSearch/SearchResultItem';
import ApiLogo from '../components/global/ApiLogo';
import theme from '../theme';

const SearchDisplay = ({route}) => {
  const context = useContext(Context);
  const {theme} = context;
  const {articles} = route.params;
  console.log({articles});
  console.log({route});

  return (
    <Container theme={theme}>
      <Spacer height={20} />
      <PrimaryHeading theme={theme}>
        Here are your search results...
      </PrimaryHeading>
      <Spacer height={20} />
      <FlatList
        data={articles}
        keyExtractor={item => item}
        renderItem={({item}) => {
          //return <NewsCardVertical data={item} />;
          return <SearchResultItem articleData={item} />;
        }}
        ListFooterComponent={
          <>
            <Spacer height={20} />
            <ApiLogo />
          </>
        }
      />
    </Container>
  );
};

export default SearchDisplay;
