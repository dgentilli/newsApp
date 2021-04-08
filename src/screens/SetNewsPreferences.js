import React, {useContext} from 'react';
import {FlatList} from 'react-native';

import {Context} from '../../App';
import {
  Container,
  Spacer,
  PrimaryHeading,
  SecondaryHeading,
  allNewsCategories,
} from '../components/global/Main';

import NewsCategoryTile from '../components/myStuff/NewsCategoryTile';

const SetNewsPreferences = () => {
  const context = useContext(Context);
  //console.log('all news topics context: ', context);
  const {newsCategoryPreferences, theme} = context;
  const isSelected = true;

  return (
    <Container theme={theme}>
      <Spacer height={20} />
      <PrimaryHeading theme={theme}>Personalize Your News Feed</PrimaryHeading>
      <Spacer height={5} />
      <SecondaryHeading theme={theme}>
        Click to Select/De-select
      </SecondaryHeading>
      <FlatList
        data={allNewsCategories}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        renderItem={({item}) => {
          return (
            <NewsCategoryTile
              title={item}
              selected={newsCategoryPreferences.includes(item) ? true : false}
            />
          );
        }}
      />
      <Spacer height={20} />
    </Container>
  );
};

export default SetNewsPreferences;
