import themeDecorator from './themeDecorator';

import { addDecorator } from '@storybook/react';
import '../src/index.css';
addDecorator(themeDecorator);
