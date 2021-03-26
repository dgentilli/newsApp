import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Context} from '../../App';

const Feed = () => {
  const navigation = useNavigation();
  const context = useContext(Context);
  console.log({context});
  return (
    <View style={{marginTop: 40}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>Feed Screen</Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
        }}
        onPress={() => navigation.navigate('AllNewsTopics')}>
        <Text>All News Topics</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 100,
        }}
        onPress={() => navigation.navigate('NewsListByCategory')}>
        <Text>News List By Category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
