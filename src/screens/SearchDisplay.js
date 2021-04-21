import React, {useContext} from 'react';
import {FlatList} from 'react-native';

import {Context} from '../../App';
import {
  Container,
  Spacer,
  PrimaryHeading,
  SecondaryHeading,
} from '../components/global/Main';
import SearchResultItem from '../components/advancedSearch/SearchResultItem';
import ApiLogo from '../components/global/ApiLogo';

const SearchDisplay = ({route}) => {
  const context = useContext(Context);
  const {theme} = context;
  const {articles} = route.params;
  console.log({articles});
  console.log({route});

  if (!articles || articles.length < 1) {
    return (
      <Container theme={theme}>
        <Spacer height={20} />
        <PrimaryHeading theme={theme}>
          Your search did not retrieve any results.
        </PrimaryHeading>
        <Spacer height={20} />
        <SecondaryHeading theme={theme} style={{padding: 10}}>
          Please go back and try adjusting your search terms or filters
        </SecondaryHeading>
      </Container>
    );
  } else {
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
  }
};

export default SearchDisplay;
