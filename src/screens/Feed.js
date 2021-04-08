import React, {useContext} from 'react';
import {SectionList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Context} from '../../App';
import {Container, Button, ButtonText, Spacer} from '../components/global/Main';
import Welcome from '../components/feed/Welcome';
import NewsScroll from '../components/global/NewsScroll';
import NewsScrollHeader from '../components/global/NewsScrollHeader';
import {newsFeedMockData} from '../mockData/newsFeedMockData';

const Feed = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  //console.log({context});
  //console.log({newsFeedMockData});
  const {newsCategoryPreferences, theme} = context;

  const newsData = newsCategoryPreferences.map(item => ({
    title: item,
    data: [newsFeedMockData],
  }));

  return (
    <Container theme={theme}>
      <SectionList
        sections={newsData}
        keyExtractor={item => item}
        renderItem={({item}) => <NewsScroll data={item} />}
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
            <Spacer height={30} />
          </>
        }
      />
    </Container>
  );
};

export default Feed;
