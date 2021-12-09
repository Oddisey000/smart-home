import React from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';

import AppHouseComponent from './app-house/app-house.component';

const testFunction = () => {
  console.log("You clicked outside")
}

const BodyComponent = () => {
  return (
    <ClickAwayListener onClickAway={testFunction}>
      <div>
        <AppHouseComponent />
      </div>
    </ClickAwayListener>
  );
}

export default BodyComponent;