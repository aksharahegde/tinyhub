import {
  AUTO,
  DARK,
  DARK_MODE_VALUE,
  LIGHT,
  UI_STORE,
} from '../../stores/UiStore';
import {useSetValueCallback, useValue} from 'tinybase/ui-react';
import React from 'react';

export const DarkMode = () => {
  const darkMode = (useValue(DARK_MODE_VALUE, UI_STORE) as string) ?? AUTO;
  const toggleMode = useSetValueCallback(
    DARK_MODE_VALUE,
    () => (darkMode) =>
      darkMode == AUTO ? DARK : darkMode == DARK ? LIGHT : AUTO,
    [],
    UI_STORE,
  );

  return <span id="darkMode" onClick={toggleMode} className={darkMode} />;
};
