import 'whatwg-fetch';
import '@testing-library/jest-dom/extend-expect';
import mediaQuery from 'css-mediaquery';
import 'jest-styled-components';
import { server } from './src/__mocks__/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Prevents scrollTo not implemented error caused by framer motion.
window.scrollTo = jest.fn();

// Mock of window.matchMedia.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => {
    const matchObj = {
      matches: mediaQuery.match(query, {
        width: window.innerWidth,
        height: window.innerHeight,
      }),
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };

    // Listen to resize events from window.resizeTo and update the match.
    window.addEventListener('resize', () => {
      const change = mediaQuery.match(query, {
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (change !== matchObj.matches) {
        matchObj.matches = change;
        matchObj.dispatchEvent('change');
      }
    });

    return matchObj;
  },
});

// Mock of window.resizeTo.
Object.defineProperty(window, 'resizeTo', {
  value: (width, height) => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      writable: true,
      value: width,
    });
    Object.defineProperty(window, 'outerWidth', {
      configurable: true,
      writable: true,
      value: width,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      writable: true,
      value: height,
    });
    Object.defineProperty(window, 'outerHeight', {
      configurable: true,
      writable: true,
      value: height,
    });

    window.dispatchEvent(new Event('resize'));
  },
});
