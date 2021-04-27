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
      <Stack.Screen
        name="Popular Stories"
        component={PopularStories}
        options={{headerTitle: 'Popular Stories'}}
      />
      <Stack.Screen
        name="AllNewsTopics"
        component={AllNewsTopics}
        options={{headerTitle: 'All Topics'}}
      />
      <Stack.Screen
        name="ArticleView"
        component={ArticleView}
        options={{headerTitle: 'Article View'}}
      />
      <Stack.Screen
        name="NewsListByCategory"
        component={NewsListByCategory}
        options={{headerTitle: 'News Category'}}
      />
    </Stack.Navigator>
  );
};

export default PopuarStoriesStack;
