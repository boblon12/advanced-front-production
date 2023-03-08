import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'TEXT',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'TEXT',
  theme: ButtonTheme.CLEAR,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.XL,
  square: true,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: '>',
  theme: ButtonTheme.INVERTED_BACKGROUND,
  size: ButtonSize.XL,
  square: true,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: 'TEXT',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearLight = Template.bind({});
ClearLight.args = {
  children: 'TEXT',
  theme: ButtonTheme.CLEAR,
};
ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundInvertedLight = Template.bind({});
BackgroundInvertedLight.args = {
  children: '>',
  theme: ButtonTheme.INVERTED_BACKGROUND,
  size: ButtonSize.XL,
  square: true,
};
BackgroundInvertedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundLight = Template.bind({});
BackgroundLight.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  size: ButtonSize.XL,
  square: true,
};
BackgroundLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Disabled = Template.bind({});
Disabled.args = {
  children: '>',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
