import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedStack from './src/navigation/FeedStack';
import AdvancedSearch from './src/screens/AdvancedSearch';
import PopularStories from './src/screens/PopularStories';
import MyStuff from './src/screens/MyStuff';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen name="Feed" component={FeedStack} />
        <Tab.Screen name="AdvancedSearch" component={AdvancedSearch} />
        <Tab.Screen name="PopularStories" component={PopularStories} />
        <Tab.Screen name="MyStuff" component={MyStuff} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
