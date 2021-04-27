import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AdvancedSearch from '../screens/AdvancedSearch';
import SearchDisplay from '../screens/SearchDisplay';

const SearchStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdvancedSearch"
        component={AdvancedSearch}
        options={{headerTitle: 'Search'}}
      />
      <Stack.Screen
        name="SearchDisplay"
        component={SearchDisplay}
        options={{headerTitle: 'Search Results'}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
