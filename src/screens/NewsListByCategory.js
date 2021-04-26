import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';
const axios = require('axios');

import {Context} from '../../App';
import {
  Container,
  Button,
  ButtonText,
  Spacer,
  PrimaryHeading,
} from '../components/global/Main';
import NewsCardVertical from '../components/global/NewsCardVertical';
import ApiLogo from '../components/global/ApiLogo';
import {newsFeedMockData} from '../mockData/newsFeedMockData';

import {NYT_API_KEY} from '@env';

const NewsListByCategory = ({route}) => {
  const [articleData, setArticleData] = useState([]);
  const context = useContext(Context);
  const {theme} = context;
  const {params} = route;
  const {section} = params;
  //console.log('newsListByCategory context: ', context);
  useEffect(() => {
    let root = `https://api.nytimes.com/svc/topstories/v2`;

    const fetchNews = async () => {
      try {
        let response = await axios.get(
          `${root}/${section}.json?api-key=${NYT_API_KEY}`,
        );
        //console.log('newsScroll response', response.data.results);
        setArticleData(response.data.results);
      } catch (error) {
        console.log({error});
      }
    };
    fetchNews();
  }, [section]);

  return (
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
      />
    </Container>
  );
};

export default NewsListByCategory;
