import PokemonPorvider from 'context/providers/PokemonProvider';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PokemonPorvider>
          <Routes />
        </PokemonPorvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}
