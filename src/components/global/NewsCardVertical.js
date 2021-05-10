import React, {useContext} from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components';

import theme from '../../theme';
import {Context} from '../../../App';
import {Title, Abstract} from './Main';

const CardVerticalContainer = styled.TouchableOpacity`
  width: 98%;
  height: 115px;
  margin: 0 auto;
  border-bottom-width: 1px;
  border-color: ${theme.color.LIGHT_GRAY};
  display: flex;
  flex-direction: row;
  margin-top: 7px;
`;

const TextContainer = styled.View`
  flex: 2;
`;

const Image = styled.Image`
  height: 100%;
  flex: 1;
  border-radius: 4px;
`;

const NewsCardVertical = ({data}) => {
  //console.log('newsCardVertical data', data);
  const context = useContext(Context);
  const {theme} = context;
  const {title, abstract, url, multimedia, byline} = data;
  const imageUrl = multimedia && multimedia[2].url;

  return (
    <CardVerticalContainer onPress={() => Linking.openURL(url)}>
      <Image
        resizeMode="cover"
        source={{
          uri: imageUrl,
        }}
      />
      <TextContainer>
        <Title theme={theme} numberOfLines={2}>
          {title}
        </Title>
        <Abstract theme={theme} numberOfLines={3}>
          {abstract && abstract.length > 0 ? abstract : byline}
        </Abstract>
      </TextContainer>
    </CardVerticalContainer>
  );
};

export default NewsCardVertical;
