import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotFountPage } from './NotFountPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/const/theme';

export default {
  title: 'pages/NotFoundPage',
  component: NotFountPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFountPage>;

const Template: ComponentStory<typeof NotFountPage> = (args) => (
  <NotFountPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
