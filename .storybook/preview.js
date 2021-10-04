import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

export const parameters = {
  backgrounds: {
    default: 'custom-dark',
    values: [
      {
        name: 'custom-dark',
        value: '#323240'
      }
    ]
  }

};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];