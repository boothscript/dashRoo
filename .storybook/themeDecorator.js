import React from 'react';
import { ThemeProvider } from 'styled-components';

import dark from '../src/Themes/dark';

export default function themeDecorator(storyFn) {
  return <ThemeProvider theme={dark}>{storyFn()}</ThemeProvider>;
}
