import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AllNewsTopics from '../screens/AllNewsTopics';
import ArticleView from '../screens/ArticleView';
import PopularStories from '../screens/PopularStories';
import NewsListByCategory from '../screens/NewsListByCategory';
import {Context} from '../../App';

import theme from '../theme';

const bgDark = theme.color.BG_DARK;
const bgLight = theme.color.BG_LIGHT;
const textDark = theme.color.TEXT_DARK;
const textLight = theme.color.TEXT_LIGHT;

const PopuarStoriesStack = () => {
  const Stack = createStackNavigator();
  const context = React.useContext(Context);
  const {theme} = context;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Popular Stories"
        component={PopularStories}
        options={{
          headerTitle: 'Popular Stories',
          headerTitleStyle: {color: theme === 'dark' ? textLight : textDark},

          headerStyle: {
            backgroundColor: theme === 'dark' ? bgDark : bgLight,
          },
        }}
      />
      <Stack.Screen
        name="AllNewsTopics"
        component={AllNewsTopics}
        options={{
          headerTitle: 'All Topics',
          headerTitleStyle: {color: theme === 'dark' ? textLight : textDark},

          headerStyle: {
            backgroundColor: theme === 'dark' ? bgDark : bgLight,
          },
        }}
      />
      <Stack.Screen
        name="ArticleView"
        component={ArticleView}
        options={{headerTitle: 'Article View'}}
      />
      <Stack.Screen
        name="NewsListByCategory"
        component={NewsListByCategory}
        options={{
          headerTitle: 'News Category',
          headerTitleStyle: {color: theme === 'dark' ? textLight : textDark},

          headerStyle: {
            backgroundColor: theme === 'dark' ? bgDark : bgLight,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default PopuarStoriesStack;
