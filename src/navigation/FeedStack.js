import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from '../screens/Feed';
import NewsListByCategory from '../screens/NewsListByCategory';
import AllNewsTopics from '../screens/AllNewsTopics';

const FeedStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="NewsListByCategory" component={NewsListByCategory} />
      <Stack.Screen name="AllNewsTopics" component={AllNewsTopics} />
    </Stack.Navigator>
  );
};

export default FeedStack;
