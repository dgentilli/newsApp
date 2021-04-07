import React, {useContext} from 'react';

import {Context} from '../../../App';
import {PrimaryHeading, Spacer} from '../global/Main';

const Welcome = () => {
  const context = useContext(Context);
  const {theme} = context;

  /**Note: For now this is just saying Welcome
   * Once I incorporate auth and track the logged in user
   * It will include a personalized welcome message
   */

  return (
    <>
      <Spacer height={10} />
      <PrimaryHeading theme={theme}>Welcome!</PrimaryHeading>
      <Spacer height={10} />
    </>
  );
};

export default Welcome;
