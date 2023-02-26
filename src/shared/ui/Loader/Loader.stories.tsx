import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from './Loader';
import { Theme } from 'shared/const/theme';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    className: 'lds-grid',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LightVersion = Template.bind({});
LightVersion.args = {};

export const DarkVersion = Template.bind({});
DarkVersion.args = {};
DarkVersion.decorators = [ThemeDecorator(Theme.LIGHT)];
