import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components';

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

const NewsListByCategory = ({route}) => {
  const context = useContext(Context);
  const {theme} = context;
  const {params} = route;
  //console.log('newsListByCategory context: ', context);
  return (
    <Container theme={theme}>
      <Spacer height={20} />
      <PrimaryHeading theme={theme}>
        Latest News in {params.section}
      </PrimaryHeading>
      <Spacer height={20} />
      <FlatList
        data={newsFeedMockData}
        keyExtractor={item => item}
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
