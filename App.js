import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Appearance} from 'react-native';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedStack from './src/navigation/FeedStack';
import MyStuffStack from './src/navigation/MyStuffStack';
import SearchStack from './src/navigation/SearchStack';
import PopuarStoriesStack from './src/navigation/PopularStoriesStack';

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
  const colorScheme = Appearance.getColorScheme();
  const Tab = createBottomTabNavigator();

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const modifyNewsPreferences = category => {
    //console.log({category});
    if (newsCategoryPreferences.includes(category)) {
      setNewsCategoryPreferences([
        ...newsCategoryPreferences.filter(item => category !== item),
      ]);
    } else {
      setNewsCategoryPreferences([...newsCategoryPreferences, category]);
    }
  };

  return (
    <Context.Provider
      value={{
        loggedInUser,
        theme,
        newsCategoryPreferences,
        isFirstLogin,
        toggleTheme,
        modifyNewsPreferences,
      }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Feed">
          <Tab.Screen name="Feed" component={FeedStack} />
          <Tab.Screen name="AdvancedSearch" component={SearchStack} />
          <Tab.Screen name="PopularStories" component={PopuarStoriesStack} />
          <Tab.Screen name="MyStuff" component={MyStuffStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};
export default App;
