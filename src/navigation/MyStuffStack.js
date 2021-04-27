import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SetNewsPreferences from '../screens/SetNewsPreferences';
import MyStuff from '../screens/MyStuff';
import {Context} from '../../App';

import theme from '../theme';

const bgDark = theme.color.BG_DARK;
const bgLight = theme.color.BG_LIGHT;
const textDark = theme.color.TEXT_DARK;
const textLight = theme.color.TEXT_LIGHT;

const MyStuffStack = () => {
  const Stack = createStackNavigator();
  const context = React.useContext(Context);
  const {theme} = context;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyStuff"
        component={MyStuff}
        options={{
          headerTitle: 'My Settings',
          headerTitleStyle: {color: theme === 'dark' ? textLight : textDark},

          headerStyle: {
            backgroundColor: theme === 'dark' ? bgDark : bgLight,
          },
        }}
      />
      <Stack.Screen
        name="SetNewsPreferences"
        component={SetNewsPreferences}
        options={{
          headerTitle: 'My News',
          headerTitleStyle: {color: theme === 'dark' ? textLight : textDark},

          headerStyle: {
            backgroundColor: theme === 'dark' ? bgDark : bgLight,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStuffStack;
