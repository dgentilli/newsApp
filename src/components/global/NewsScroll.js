import React, {useEffect, useState, useContext} from 'react';
import {FlatList} from 'react-native';
const axios = require('axios');

import NewsCardHorizontal from './NewsCardHorizontal';
import SeeMore from '../feed/SeeMore';
import ErrorDisplay from './ErrorDisplay';
import {SecondaryHeading, Container, Spacer} from './Main';
import {Context} from '../../../App';

import {NYT_API_KEY} from '@env';

const NewsScroll = ({title, isPopularStories}) => {
  const [articleData, setArticleData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(Context);
  const {theme} = context;
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
      setIsLoading(true);
      try {
        let response = await axios.get(
          `${root}${section}.json?api-key=${NYT_API_KEY}`,
        );
        //console.log('newsScroll response', response.data.results);
        setArticleData(response.data.results);
      } catch (error) {
        console.log({error});
        setError(true);
        setIsLoading(false);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    };
    fetchNews();
    return () => setIsLoading(false);
  }, []);

  return articleData && articleData.length > 0 ? (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={articleData.slice(0, 10)}
      keyExtractor={item => item.title}
      renderItem={({item}) => {
        return <NewsCardHorizontal data={item} />;
      }}
      ListFooterComponent={
        !isPopularStories ? <SeeMore section={title} /> : null
      }
      ListHeaderComponent={error ? <ErrorDisplay /> : null}
    />
  ) : articleData && articleData.length === 0 && !isLoading ? (
    <Container theme={theme}>
      <Spacer height={10} />
      <SecondaryHeading theme={theme}>No Articles to Display</SecondaryHeading>
    </Container>
  ) : (
    <Container theme={theme}>
      <Spacer height={10} />
      <SecondaryHeading theme={theme}>Loading...</SecondaryHeading>
    </Container>
  );
};

export default NewsScroll;
