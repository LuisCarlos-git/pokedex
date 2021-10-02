import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField
} as Meta;

export const TextFieldDefault: Story<TextFieldProps> = args => (
  <TextField {...args} />
);
TextFieldDefault.args = {
  placeholder: 'Search a pokemon'
};

export const TextFieldError: Story<TextFieldProps> = args => (
  <TextField {...args} />
);
TextFieldError.args = {
  placeholder: 'Search a pokemon',
  error: true
};
