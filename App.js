import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import GlobalState from './Context/GlobalState';
import FeedStack from './src/navigation/FeedStack';
import AdvancedSearch from './src/screens/AdvancedSearch';
import PopularStories from './src/screens/PopularStories';
import MyStuff from './src/screens/MyStuff';

export const Context = React.createContext();

const mockState = {
  loggedInUser: {
    id: 1327583,
    email: 'homer@testmail.test',
    nickname: 'Homer',
  },
  //use a hard coded user until it's time to build the auth.
  theme: 'light', //default, but will eventually get this from the OS.
  newsCategoryPreferences: ['us', 'world', 'science', 'arts', 'business'], //These are the default categories
  isFirstLogin: false, //set this false until its time to work on the modal
};

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(mockState.loggedInUser);
  const [theme, setTheme] = useState(mockState.theme);
  const [newsCategoryPreferences, setNewsCategoryPreferences] = useState(
    mockState.newsCategoryPreferences,
  );
  const [isFirstLogin, setIsFirstLogin] = useState(mockState.isFirstLogin);
  const isDarkMode = useColorScheme() === 'dark';
  const Tab = createBottomTabNavigator();

  return (
    <Context.Provider
      value={{loggedInUser, theme, newsCategoryPreferences, isFirstLogin}}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Feed">
          <Tab.Screen name="Feed" component={FeedStack} />
          <Tab.Screen name="AdvancedSearch" component={AdvancedSearch} />
          <Tab.Screen name="PopularStories" component={PopularStories} />
          <Tab.Screen name="MyStuff" component={MyStuff} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};
export default App;
