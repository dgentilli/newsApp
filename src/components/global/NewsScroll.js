import React, {useContext} from 'react';
import {FlatList} from 'react-native';

import NewsCardHorizontal from './NewsCardHorizontal';
import SeeMore from '../feed/SeeMore';

const NewsScroll = ({data}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data.slice(0, 10)}
      keyExtractor={item => item}
      renderItem={({item}) => {
        return <NewsCardHorizontal data={item} />;
      }}
      ListFooterComponent={<SeeMore section={data[0].section} />}
    />
  );
};

export default NewsScroll;
