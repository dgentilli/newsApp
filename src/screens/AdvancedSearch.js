import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {Context} from '../../App';

const AdvancedSearch = () => {
  const context = useContext(Context);
  console.log('AdvancedSearch context: ', context);
  return (
    <View style={{marginTop: 40}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>
        AdvancedSearch Screen
      </Text>
    </View>
  );
};

export default AdvancedSearch;
