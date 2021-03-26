import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {Context} from '../../App';

const MyStuff = () => {
  const context = useContext(Context);
  console.log('MyStuff context: ', context);
  return (
    <View style={{marginTop: 40}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>MyStuff Screen</Text>
    </View>
  );
};

export default MyStuff;
