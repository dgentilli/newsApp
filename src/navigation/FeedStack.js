import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from '../screens/Feed';
import NewsListByCategory from '../screens/NewsListByCategory';
import AllNewsTopics from '../screens/AllNewsTopics';
import ArticleView from '../screens/ArticleView';
import AuthFlow from '../screens/AuthFlow';
import {Context} from '../../App';

import theme from '../theme';

const bgDark = theme.color.BG_DARK;
const bgLight = theme.color.BG_LIGHT;
const textDark = theme.color.TEXT_DARK;
const textLight = theme.color.TEXT_LIGHT;

const FeedStack = () => {
  const Stack = createStackNavigator();
  const context = React.useContext(Context);
  const {theme} = context;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitle: 'Feed',
          headerTitleStyle: {color: theme === 'dark' ? textLight : textDark},

          headerStyle: {
            backgroundColor: theme === 'dark' ? bgDark : bgLight,
          },
        }}
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
      <Stack.Screen name="AuthFlow" component={AuthFlow} />

      <Stack.Screen name="ArticleView" component={ArticleView} />
    </Stack.Navigator>
  );
};

export default FeedStack;
