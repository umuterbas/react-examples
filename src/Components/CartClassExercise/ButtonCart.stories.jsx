import React from 'react';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

import ButtonCart from './ButtonCart';

export default {
  title: 'CartExercise/Button',
  component: ButtonCart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ButtonCart {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Default',
};

export const AddToCart = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AddToCart.args = {
  label: 'Add to cart',
  type: 'add',
};

export const RemoveItem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RemoveItem.args = {
  label: '',
  type: 'remove',
};
