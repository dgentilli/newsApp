import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
const axios = require('axios');

import NewsCardHorizontal from './NewsCardHorizontal';
import SeeMore from '../feed/SeeMore';

import {NYT_API_KEY} from '@env';

const NewsScroll = ({title, isPopularStories}) => {
  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    let root = isPopularStories
      ? `https://api.nytimes.com/svc/mostpopular/v2`
      : `https://api.nytimes.com/svc/topstories/v2`;
    let section = !isPopularStories
      ? `/${title}`
      : title === 'Most Emailed'
      ? `/emailed/7`
      : isPopularStories && title === 'Most Shared'
      ? `/shared/1/facebook`
      : isPopularStories && title === 'Most Viewed'
      ? `/viewed/1`
      : null;
    const fetchNews = async () => {
      try {
        let response = await axios.get(
          `${root}${section}.json?api-key=${NYT_API_KEY}`,
        );
        //console.log('newsScroll response', response.data.results);
        setArticleData(response.data.results);
      } catch (error) {
        console.log({error});
      }
    };
    fetchNews();
  }, []);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={articleData.slice(0, 10)}
      keyExtractor={item => item.title}
      renderItem={({item}) => {
        return <NewsCardHorizontal data={item} />;
      }}
      ListFooterComponent={<SeeMore section={title} />}
    />
  );
};

export default NewsScroll;
