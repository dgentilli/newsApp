import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Context} from '../../App';

const MyStuff = () => {
  const context = useContext(Context);
  console.log('MyStuff context: ', context);
  const {
    isFirstLogin,
    loggedInUser,
    theme,
    toggleTheme,
    newsCategoryPreferences,
  } = context;
  console.log({toggleTheme});
  return (
    <View style={{marginTop: 40}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>MyStuff Screen</Text>
      <Text style={{textAlign: 'left', fontSize: 16}}>Theme Preferences</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text>{theme}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyStuff;
