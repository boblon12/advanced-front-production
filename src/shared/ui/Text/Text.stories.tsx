import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'shared/const/theme';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title lorem ipsun',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Description Description Description Description',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyTitleLight = Template.bind({});
onlyTitleLight.args = {
  title: 'Title lorem ipsun',
};
onlyTitleLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const onlyTextLight = Template.bind({});
onlyTextLight.args = {
  text: 'Description Description Description Description',
};
onlyTextLight.decorators = [ThemeDecorator(Theme.LIGHT)];
