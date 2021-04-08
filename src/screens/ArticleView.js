import React, {useContext} from 'react';
import {WebView} from 'react-native-webview';

import {Context} from '../../App';
import {Container} from '../components/global/Main';

const ArticleView = ({route}) => {
  const {params} = route;
  const context = useContext(Context);
  const {theme} = context;
  return (
    <Container theme={theme}>
      <WebView source={{uri: params.url}} />
    </Container>
  );
};

export default ArticleView;
