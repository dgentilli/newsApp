import React, {useContext, useState} from 'react';
import {SectionList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from 'firebase/app';
import 'firebase/auth';

import {Context} from '../../App';
import {
  Container,
  Button,
  ButtonText,
  Spacer,
  PrimaryHeading,
} from '../components/global/Main';
import Welcome from '../components/feed/Welcome';
import NewsScroll from '../components/global/NewsScroll';
import NewsScrollHeader from '../components/global/NewsScrollHeader';
import ApiLogo from '../components/global/ApiLogo';
import {newsFeedMockData} from '../mockData/newsFeedMockData';

const Feed = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const {newsCategoryPreferences, theme, loggedInUser} = context;
  const [emailIsVerified, setEmailIsVerified] = useState(
    loggedInUser.emailVerified,
  );
  //console.log({context});
  //console.log({newsFeedMockData});

  checkEmailVerificationStatus = () => {
    firebase
      .auth()
      .currentUser.reload()
      .then(user => {
        if (firebase.auth().currentUser.emailVerified) {
          setEmailIsVerified(true);
        }
      });
  };

  const newsData = newsCategoryPreferences.map(item => ({
    title: item,
    data: [`${item}`],
  }));

  return emailIsVerified || loggedInUser.isAnonymous ? (
    <Container theme={theme}>
      <SectionList
        sections={newsData}
        keyExtractor={item => item}
        renderItem={({item}) => <NewsScroll title={item} />}
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
  ) : (
    <Container theme={theme}>
      <PrimaryHeading theme={theme}>
        Please verify your email to see your news feed.
      </PrimaryHeading>
      <Spacer height={20} />
      <Button onPress={checkEmailVerificationStatus}>
        <ButtonText>Refresh</ButtonText>
      </Button>
    </Container>
  );
};

export default Feed;
