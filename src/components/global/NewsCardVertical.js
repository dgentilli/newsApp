import React, {useContext} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();
  const context = useContext(Context);
  const {theme} = context;
  const {title, abstract, url, multimedia, byline} = data;
  const imageUrl = multimedia[2].url;
  const titleDisplay =
    title.length > 55 ? `${title.substring(0, 55)}...` : title;
  const abstractDisplay =
    abstract.length > 105 ? `${abstract.slice(0, 105)}...` : abstract;

  return (
    <CardVerticalContainer
      onPress={() => navigation.navigate('ArticleView', {url})}>
      <Image
        resizeMode="cover"
        source={{
          uri: imageUrl,
        }}
      />
      <TextContainer>
        <Title theme={theme}>{titleDisplay}</Title>
        <Abstract theme={theme}>
          {abstract && abstract.length > 0 ? abstractDisplay : byline}
        </Abstract>
      </TextContainer>
    </CardVerticalContainer>
  );
};

export default NewsCardVertical;
