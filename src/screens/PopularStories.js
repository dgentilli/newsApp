import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {Context} from '../../App';

const PopularStories = () => {
  const context = useContext(Context);
  //console.log('PopularStories context: ', context);
  return (
    <View style={{marginTop: 40}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>
        PopularStories Screen
      </Text>
    </View>
  );
};

export default PopularStories;
