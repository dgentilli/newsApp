import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
const axios = require('axios');

import {Context} from '../../App';
import {
  Container,
  SecondaryHeading,
  Spacer,
  PrimaryHeading,
} from '../components/global/Main';
import NewsCardVertical from '../components/global/NewsCardVertical';
import ApiLogo from '../components/global/ApiLogo';
import ErrorDisplay from '../components/global/ErrorDisplay';
import {newsFeedMockData} from '../mockData/newsFeedMockData';

import {NYT_API_KEY} from '@env';

const NewsListByCategory = ({route}) => {
  const [articleData, setArticleData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(Context);
  const {theme} = context;
  const {params} = route;
  const {section} = params;
  //console.log('newsListByCategory context: ', context);
  useEffect(() => {
    let root = `https://api.nytimes.com/svc/topstories/v2`;

    const fetchNews = async () => {
      setIsLoading(true);
      try {
        let response = await axios.get(
          `${root}/${section}.json?api-key=${NYT_API_KEY}`,
        );
        //console.log('newsScroll response', response.data.results);
        setArticleData(response.data.results);
        setIsLoading(false);
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
  }, [section]);

  return articleData.length > 0 ? (
    <Container theme={theme}>
      <Spacer height={20} />
      <PrimaryHeading theme={theme}>
        Latest News in {params.section}
      </PrimaryHeading>
      <Spacer height={20} />
      <FlatList
        data={articleData}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return <NewsCardVertical data={item} />;
        }}
        ListFooterComponent={
          <>
            <Spacer height={20} />
            <ApiLogo />
          </>
        }
        ListHeaderComponent={error ? <ErrorDisplay /> : null}
      />
    </Container>
  ) : articleData.length === 0 && !isLoading ? (
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

export default NewsListByCategory;
