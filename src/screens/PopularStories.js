import React, {useContext} from 'react';
import {SectionList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Context} from '../../App';
import {Container, Button, ButtonText, Spacer} from '../components/global/Main';
import Welcome from '../components/feed/Welcome';
import NewsScroll from '../components/global/NewsScroll';
import NewsScrollHeader from '../components/global/NewsScrollHeader';
import ApiLogo from '../components/global/ApiLogo';
import {newsFeedMockData} from '../mockData/newsFeedMockData';

const PopularStories = () => {
  const context = useContext(Context);
  const {theme} = context;
  const navigation = useNavigation();

  const popularCategories = ['Most Emailed', 'Most Viewed', 'Most Shared'];

  const newsData = popularCategories.map(item => ({
    title: item,
    data: [`${item}`],
  }));

  return (
    <Container theme={theme}>
      <SectionList
        sections={newsData}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <NewsScroll title={item} isPopularStories={true} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <NewsScrollHeader title={title} />
        )}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={<Welcome />}
        ListFooterComponent={
          <>
            <Spacer height={10} />
            <Button onPress={() => navigation.navigate('AllNewsTopics')}>
              <ButtonText>See All Topics</ButtonText>
            </Button>
            <Spacer height={20} />
            <ApiLogo />
          </>
        }
      />
    </Container>
  );
};

export default PopularStories;
