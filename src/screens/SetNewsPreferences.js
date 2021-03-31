import React, {useContext} from 'react';
import {Text, FlatList} from 'react-native';
import styled from 'styled-components';
import {Context} from '../../App';
import NewsCategoryTile from '../components/NewsCategoryTile';

const Container = styled.SafeAreaView`
  flex: 1;
  margin-bottom: 40px;
`;

const SetNewsPreferences = () => {
  const context = useContext(Context);
  //console.log('all news topics context: ', context);
  const allNewsCategories = [
    'arts',
    'automobiles',
    'books',
    'business',
    'fashion',
    'food',
    'health',
    'home',
    'insider',
    'magazine',
    'movies',
    'nyregion',
    'obituaries',
    'opinion',
    'politics',
    'realestate',
    'science',
    'sports',
    'sundayreview',
    'technology',
    'theater',
    't-magazine',
    'travel',
    'upshot',
    'us',
    'world',
  ];
  const {newsCategoryPreferences} = context;
  const isSelected = true;

  return (
    <Container>
      <Text style={{textAlign: 'center', fontSize: 25}}>
        SetNewsPreferences Screen
      </Text>
      <FlatList
        data={allNewsCategories}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        renderItem={({item}) => {
          return (
            <NewsCategoryTile
              title={item}
              selected={newsCategoryPreferences.includes(item) ? true : false}
            />
          );
        }}
      />
    </Container>
  );
};

export default SetNewsPreferences;
