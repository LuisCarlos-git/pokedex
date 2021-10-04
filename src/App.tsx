import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}
