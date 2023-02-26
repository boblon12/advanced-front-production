import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/const/theme';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'TEXT',
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'TEXT',
  theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'TEXT',
  theme: ThemeButton.OUTLINE,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: 'TEXT',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearLight = Template.bind({});
ClearLight.args = {
  children: 'TEXT',
  theme: ThemeButton.CLEAR,
};
ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'TEXT',
  theme: ThemeButton.OUTLINE,
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];
