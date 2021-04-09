import React from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components';

const LogoContainer = styled.TouchableOpacity`
  width: auto;
  height: auto;
  margin: 0 auto;
`;

const NytLogo = styled.Image`
  width: 65px;
  height: 30px;
`;

const ApiLogo = () => {
  return (
    <LogoContainer
      onPress={() => Linking.openURL('https://developer.nytimes.com/')}>
      <NytLogo
        resizeMode="cover"
        source={{
          uri:
            'https://developer.nytimes.com/files/poweredby_nytimes_65b.png?v=1583354208346',
        }}
      />
    </LogoContainer>
  );
};

export default ApiLogo;
