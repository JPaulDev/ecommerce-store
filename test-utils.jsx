import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { setupStore } from './src/app/store';
import { UIProvider } from './src/contexts/UIContext';
import theme from './src/styles/theme';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <UIProvider>{children}</UIProvider>
        </Provider>
      </ThemeProvider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';
export { renderWithProviders as render };
