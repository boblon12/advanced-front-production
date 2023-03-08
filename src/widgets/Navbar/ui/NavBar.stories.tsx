import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/const/theme';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'widgets/NavBar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    user: {
      authData: {
        username: 'admin',
        id: '1',
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        username: 'admin',
        id: '1',
      },
    },
  }),
];

export const DarkNotLogin = Template.bind({});
DarkNotLogin.args = {};
DarkNotLogin.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: undefined,
    },
  }),
];

export const LightNotLogin = Template.bind({});
LightNotLogin.args = {};
LightNotLogin.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    user: {
      authData: undefined,
    },
  }),
];

