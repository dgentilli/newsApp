import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Appearance} from 'react-native';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firebase from 'firebase/app';
import 'firebase/auth';

import FeedStack from './src/navigation/FeedStack';
import MyStuffStack from './src/navigation/MyStuffStack';
import SearchStack from './src/navigation/SearchStack';
import PopuarStoriesStack from './src/navigation/PopularStoriesStack';
import {firebaseConfig} from './firebaseConfig';

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
  firebase.initializeApp(firebaseConfig);

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
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            inactiveTintColor: theme === 'dark' ? '#f8f9faff' : '#343a40ff',
            activeTintColor: theme === 'dark' ? '#4cc9f0ff' : '#f72585ff',

            style: {
              backgroundColor: theme === 'dark' ? '#343a40ff' : '#f8f9faff',
            },
          }}>
          <Tab.Screen
            name="Feed"
            component={FeedStack}
            options={{title: 'Feed'}}
            style={{color: 'red'}}
          />
          <Tab.Screen
            name="AdvancedSearch"
            component={SearchStack}
            options={{title: 'Search'}}
          />
          <Tab.Screen
            name="PopularStories"
            component={PopuarStoriesStack}
            options={{title: 'Popular Stories'}}
          />
          <Tab.Screen
            name="MyStuff"
            component={MyStuffStack}
            options={{title: 'My Settings'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};
export default App;
