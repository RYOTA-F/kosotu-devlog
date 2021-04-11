import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import AppTitle  from './AppTitle';

export default {
  title: 'Test/AppTitle',
  component: AppTitle,
};

const Template: Story<ComponentProps<typeof AppTitle>> = (args) => <AppTitle {...args} />;

export const Default = Template.bind({})
