import React, {useContext} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import theme from '../../theme';
import {Context} from '../../../App';

const TileWrapper = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  justify-content: center;
  margin-top: 30px;
`;

const TileTitle = styled.Text`
  color: ${props => props.color};
  text-align: center;
`;

const NewsCategoryTile = ({title, selected}) => {
  const context = useContext(Context);
  const {modifyNewsPreferences} = context;

  return (
    <View>
      <TileWrapper
        onPress={() => {
          modifyNewsPreferences(title);
        }}
        bgColor={selected ? theme.color.SKY_BLUE : theme.color.LIGHT_GRAY}>
        <TileTitle
          color={selected ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK}>
          {title}
        </TileTitle>
      </TileWrapper>
    </View>
  );
};

export default NewsCategoryTile;
