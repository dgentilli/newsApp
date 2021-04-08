import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from '../screens/Feed';
import NewsListByCategory from '../screens/NewsListByCategory';
import AllNewsTopics from '../screens/AllNewsTopics';
import ArticleView from '../screens/ArticleView';

const FeedStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="NewsListByCategory" component={NewsListByCategory} />
      <Stack.Screen name="AllNewsTopics" component={AllNewsTopics} />
      <Stack.Screen name="ArticleView" component={ArticleView} />
    </Stack.Navigator>
  );
};

export default FeedStack;
