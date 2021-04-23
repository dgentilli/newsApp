import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components';

import {Spacer} from './Main';
import theme from '../../theme';

const pink = theme.color.PINK;

const ErrorText = styled.Text`
  font-size: ${props => props.fontSize}px;
  text-align: center;
  color: ${theme.color.BG_LIGHT};
`;

const ErrorDisplay = ({theme}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.6,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        delay: 4000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        height: 'auto',
        backgroundColor: pink,
      }}
      theme={theme}>
      <Spacer height={20} />
      <ErrorText fontSize={20} theme={theme}>
        Well....This is strange!
      </ErrorText>
      <Spacer height={20} />
      <ErrorText fontSize={16} theme={theme}>
        There was an error...
      </ErrorText>
      <ErrorText fontSize={16} theme={theme}>
        Please wait a moment, then try your search again.
      </ErrorText>
      <Spacer height={20} />
    </Animated.View>
  );
};

export default ErrorDisplay;
