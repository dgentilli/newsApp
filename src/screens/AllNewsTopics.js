import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Context} from '../../App';
import {
  Container,
  Button,
  ButtonText,
  Spacer,
  PrimaryHeading,
} from '../components/global/Main';

const AllNewsTopics = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const {theme} = context;
  const allNewsCategories = [
    'us',
    'world',
    'business',
    'science',
    'arts',
    'automobiles',
    'books',
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
    'sports',
    'sundayreview',
    'technology',
    'theater',
    't-magazine',
    'travel',
    'upshot',
  ];
  //console.log('all news topics context: ', context);
  return (
    <Container theme={theme}>
      <Spacer height={20} />
      <PrimaryHeading theme={theme}>Browse by Section</PrimaryHeading>
      <Spacer height={10} />
      <FlatList
        data={allNewsCategories}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return (
            <>
              <Spacer height={5} />
              <Button
                onPress={() =>
                  navigation.navigate('NewsListByCategory', {
                    section: item,
                  })
                }>
                <ButtonText>{item.toUpperCase()}</ButtonText>
              </Button>
              <Spacer height={5} />
            </>
          );
        }}
      />
    </Container>
  );
};

export default AllNewsTopics;
