import React, {useContext} from 'react';
import {FlatList, TouchableOpacity, SectionList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Context} from '../../App';
import {Container, Spacer, PrimaryHeading} from '../components/reusable/Main';
import NewsScroll from '../components/NewsScroll';
import NewsScrollHeader from '../components/NewsScrollHeader';

const Feed = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  //console.log({context});
  //console.log({newsFeedMockData});
  const {newsCategoryPreferences, theme} = context;

  return (
    <Container theme={theme}>
      <PrimaryHeading theme={theme}>Feed Screen</PrimaryHeading>
      <Spacer height={30} />
      <FlatList
        data={newsCategoryPreferences}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return <NewsScroll section={item} />;
        }}
      />
      {/* <SectionList
        sections={newsCategoryPreferences}
        keyExtractor={item => item}
        renderItem={({item}) => <NewsScroll section={item} />}
        renderSectionHeader={({section: {title}}) => (
          <NewsScrollHeader>{title}</NewsScrollHeader>
        )}
      /> */}
      <TouchableOpacity
        style={{
          height: 50,
          width: 250,
        }}
        onPress={() => navigation.navigate('AllNewsTopics')}>
        <PrimaryHeading theme={theme}>All News Topics</PrimaryHeading>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 250,
        }}
        onPress={() => navigation.navigate('NewsListByCategory')}>
        <PrimaryHeading theme={theme}>News List By Category</PrimaryHeading>
      </TouchableOpacity>
    </Container>
  );
};

export default Feed;
