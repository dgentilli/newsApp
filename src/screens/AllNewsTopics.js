import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {Context} from '../../App';

const AllNewsTopics = () => {
  const context = useContext(Context);
  console.log('all news topics context: ', context);
  return (
    <View style={{marginTop: 40}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>
        AllNewsTopics Screen
      </Text>
    </View>
  );
};

export default AllNewsTopics;
