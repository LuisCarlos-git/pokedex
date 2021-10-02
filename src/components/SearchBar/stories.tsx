import { Story, Meta } from '@storybook/react/types-6-0';
import SearchBar, { SearchBarProps } from '.';

export default {
  title: 'SearchBar',
  component: SearchBar
} as Meta;

export const SearchBarDefault: Story<SearchBarProps> = args => (
  <SearchBar {...args} />
);

export const SearchBarError: Story<SearchBarProps> = args => (
  <SearchBar error={true} {...args} />
);
