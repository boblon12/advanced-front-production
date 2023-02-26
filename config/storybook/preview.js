import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { Theme } from '../../src/shared/const/theme';
import i18n from './i18n';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ru: 'Русский',
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.DARK));
addDecorator(RouterDecorator);
