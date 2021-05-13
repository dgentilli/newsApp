import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firebase from 'firebase/app';
import 'firebase/auth';

import FeedStack from './src/navigation/FeedStack';
import MyStuffStack from './src/navigation/MyStuffStack';
import SearchStack from './src/navigation/SearchStack';
import PopuarStoriesStack from './src/navigation/PopularStoriesStack';
import AuthFlow from './src/screens/AuthFlow';
import {firebaseConfig} from './firebaseConfig';

export const Context = React.createContext();

const App = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const defaultTheme = 'light';
  const defaultCategories = ['us', 'world', 'science', 'arts', 'business'];
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);
  const [theme, setTheme] = useState(defaultTheme);
  const [newsCategoryPreferences, setNewsCategoryPreferences] = useState(
    defaultCategories,
  );

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  React.useEffect(() => {
    const getData = async () => {
      console.log('get data runs');
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        console.log({jsonValue});
        const parsedData = jsonValue != null ? JSON.parse(jsonValue) : null;
        setNewsCategoryPreferences(parsedData ? parsedData : defaultCategories);
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  const colorScheme = Appearance.getColorScheme();
  const Tab = createBottomTabNavigator();

  //console.log({loggedInUser});

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
    storeData(newsCategoryPreferences);
  };

  const setUserInfo = userInfo => {
    setLoggedInUser(userInfo);
  };

  const signupUser = () => {
    setHasAccount(true);
  };

  const toggleLoginSignup = () => {
    setHasAccount(!hasAccount);
  };

  return loggedInUser ? (
    <Context.Provider
      value={{
        loggedInUser,
        theme,
        newsCategoryPreferences,
        toggleTheme,
        modifyNewsPreferences,
        signupUser,
        hasAccount,
        toggleLoginSignup,
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
  ) : (
    <AuthFlow
      theme={theme}
      setUserInfo={setUserInfo}
      signupUser={signupUser}
      hasAccount={hasAccount}
      toggleLoginSignup={toggleLoginSignup}
    />
  );
};
export default App;
