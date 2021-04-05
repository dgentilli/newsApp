import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';

import NewsCardHorizontal from './NewsCardHorizontal';
import {newsFeedMockData} from '../mockData/newsFeedMockData';

const NewsScroll = ({section}) => {
  /** Here is how the API CALL will work
   * `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${env.API_KEY}`
   */
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={newsFeedMockData}
      keyExtractor={item => item}
      renderItem={({item}) => {
        return <NewsCardHorizontal />;
      }}
    />
  );
};

export default NewsScroll;
