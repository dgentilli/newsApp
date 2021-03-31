import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {Context} from '../../App';

const SetNewsPreferences = () => {
  const context = useContext(Context);
  console.log('all news topics context: ', context);
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
  return (
    <View style={{marginTop: 40}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>
        SetNewsPreferences Screen
      </Text>
    </View>
  );
};

export default SetNewsPreferences;
