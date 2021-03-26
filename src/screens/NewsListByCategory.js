import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {Context} from '../../App';

const NewsListByCategory = () => {
  const context = useContext(Context);
  console.log('newsListByCategory context: ', context);
  return (
    <View style={{marginTop: 40}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>
        NewsListByCategory Screen
      </Text>
    </View>
  );
};

export default NewsListByCategory;
