import React, {useContext} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import theme from '../../theme';
import {Context} from '../../../App';

const HorizontalCardContainer = styled.TouchableOpacity`
  width: 210px;
  height: 250px;
  margin: 7px 5px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${theme.color.LIGHT_GRAY};
`;

const Image = styled.Image`
  height: 50%;
  width: 100%;
  border-radius: 4px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  padding: 5px 10px;
`;

const Abstract = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: ${props =>
    props.theme === 'dark' ? theme.color.TEXT_LIGHT : theme.color.TEXT_DARK};
  padding: 0 10px 5px;
  line-height: 18px;
`;

const NewsCardHorizontal = ({data}) => {
  //console.log({data});
  const context = useContext(Context);
  const navigation = useNavigation();
  const {theme} = context;
  const {title, abstract, url, multimedia, updated_date} = data;
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
