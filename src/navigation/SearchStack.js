import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AdvancedSearch from '../screens/AdvancedSearch';
import SearchDisplay from '../screens/SearchDisplay';
import {Context} from '../../App';

import theme from '../theme';

const bgDark = theme.color.BG_DARK;
const bgLight = theme.color.BG_LIGHT;
const textDark = theme.color.TEXT_DARK;
const textLight = theme.color.TEXT_LIGHT;

const SearchStack = () => {
  const Stack = createStackNavigator();
  const context = React.useContext(Context);
  const {theme} = context;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdvancedSearch"
        component={AdvancedSearch}
        options={{
          headerTitle: 'Search',
          headerTitleStyle: {color: theme === 'dark' ? textLight : textDark},

          headerStyle: {
            backgroundColor: theme === 'dark' ? bgDark : bgLight,
          },
        }}
      />
      <Stack.Screen
        name="SearchDisplay"
        component={SearchDisplay}
        options={{
          headerTitle: 'Search Results',
          headerTitleStyle: {color: theme === 'dark' ? textLight : textDark},

          headerStyle: {
            backgroundColor: theme === 'dark' ? bgDark : bgLight,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
