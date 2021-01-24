/**
 * Copyright (c) Caiden Sanders and his affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// CSS Frameworks & Animation Imports
import { ThemeProvider } from 'styled-components';

import lightTheme from './css/LightTheme';
import darkTheme from './css/DarkTheme';

// React Hook Imports
import useDarkMode from './hooks/useDarkMode';

// React Component Imports
import Home from 'pages/Home';

// App React Component
const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Home darkModeToggle={themeToggler} />
    </ThemeProvider>
  );
};

// Default Export App React Component
export default App;
