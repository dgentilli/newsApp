import React, {useContext} from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components';

import {Context} from '../../../App';
import {HorizontalCardContainer, Title, Abstract} from './Main';

const Image = styled.Image`
  height: 50%;
  width: 100%;
  border-radius: 4px;
`;

const NewsCardHorizontal = ({data}) => {
  //console.log('newsCardHorizontal data', data);
  // console.log(
  //   'data.media[0]',
  //   data.media && data.media[0] && data.media[0]['media-metadata'][0].url,
  // );
  const context = useContext(Context);
  const {theme} = context;
  const {title, abstract, url, multimedia} = data;
  const mediametadata =
    data.media && data.media[0] && data.media[0]['media-metadata'][1].url;
  const imageUrl = multimedia
    ? multimedia[3].url
    : mediametadata
    ? mediametadata
    : null;
  //console.log({imageUrl});
  const titleDisplay =
    title.length > 45 ? `${title.substring(0, 45)}...` : title;
  const abstractDisplay =
    abstract.length > 95 ? `${abstract.slice(0, 95)}...` : abstract;

  return (
    <HorizontalCardContainer onPress={() => Linking.openURL(url)}>
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
