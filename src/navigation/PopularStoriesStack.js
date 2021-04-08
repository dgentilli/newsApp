import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AllNewsTopics from '../screens/AllNewsTopics';
import ArticleView from '../screens/ArticleView';
import PopularStories from '../screens/PopularStories';
import NewsListByCategory from '../screens/NewsListByCategory';

const PopuarStoriesStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Popular Stories" component={PopularStories} />
      <Stack.Screen name="AllNewsTopics" component={AllNewsTopics} />
      <Stack.Screen name="ArticleView" component={ArticleView} />
      <Stack.Screen name="NewsListByCategory" component={NewsListByCategory} />
    </Stack.Navigator>
  );
};

export default PopuarStoriesStack;
