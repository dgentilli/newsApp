import React, {useContext} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {Context} from '../../../App';
import {HorizontalCardContainer, Title, Abstract} from './Main';

const Image = styled.Image`
  height: 50%;
  width: 100%;
  border-radius: 4px;
`;

const NewsCardHorizontal = ({data}) => {
  //console.log({data});
  const context = useContext(Context);
  const navigation = useNavigation();
  const {theme} = context;
  const {title, abstract, url, multimedia} = data;
  const imageUrl = multimedia[3].url;
  const titleDisplay =
    title.length > 45 ? `${title.substring(0, 45)}...` : title;
  const abstractDisplay =
    abstract.length > 95 ? `${abstract.slice(0, 95)}...` : abstract;

  return (
    <HorizontalCardContainer
      onPress={() => navigation.navigate('ArticleView', {url})}>
      <Image
        resizeMode="cover"
        source={{
          uri: imageUrl,
        }}
      />
      <Title theme={theme}>{titleDisplay}</Title>
      <Abstract theme={theme}>{abstractDisplay}</Abstract>
    </HorizontalCardContainer>
  );
};

export default NewsCardHorizontal;
