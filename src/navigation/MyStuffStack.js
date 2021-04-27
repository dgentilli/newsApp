import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SetNewsPreferences from '../screens/SetNewsPreferences';
import MyStuff from '../screens/MyStuff';

const MyStuffStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyStuff"
        component={MyStuff}
        options={{headerTitle: 'My Stuff'}}
      />
      <Stack.Screen
        name="SetNewsPreferences"
        component={SetNewsPreferences}
        options={{headerTitle: 'News Preferences'}}
      />
    </Stack.Navigator>
  );
};

export default MyStuffStack;
