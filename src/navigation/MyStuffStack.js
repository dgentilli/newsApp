import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SetNewsPreferences from '../screens/SetNewsPreferences';
import MyStuff from '../screens/MyStuff';

const MyStuffStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="MyStuff" component={MyStuff} />
      <Stack.Screen name="SetNewsPreferences" component={SetNewsPreferences} />
    </Stack.Navigator>
  );
};

export default MyStuffStack;
