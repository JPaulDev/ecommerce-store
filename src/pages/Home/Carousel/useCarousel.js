import { useReducer, useEffect, useRef, useState } from 'react';

const initialState = {
  slideIndex: 0,
  direction: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'PREV':
      return {
        ...state,
        slideIndex:
          (state.slideIndex - 1 + action.payload.length) %
          action.payload.length,
        direction: -1,
      };
    case 'NEXT':
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % action.payload.length,
        direction: 1,
      };
    case 'JUMP':
      return {
        ...state,
        slideIndex: action.payload.index,
        direction: state.slideIndex < action.payload.index ? 1 : -1,
      };
    default:
      throw new Error();
  }
}

export default function useCarousel({ length, interval, transitionTime }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isMinimized, setIsMinimized] = useState(false);
  const transitioning = useRef(false);

  const handleChangeSlide = (type, index) => {
    if (transitioning.current) return;
    dispatch({ type, payload: { index, length } });
  };

  // Stops the carousel whilst the browser window is minimized to prevent
  // animation playing incorrectly when the browser is maximized
  useEffect(() => {
    const handleWindowMinimized = () => setIsMinimized(!isMinimized);
    document.addEventListener('visibilitychange', handleWindowMinimized);

    return () => {
      document.removeEventListener('visibilitychange', handleWindowMinimized);
    };
  }, [isMinimized]);

  useEffect(() => {
    transitioning.current = true;

    const transitionTimeout = setTimeout(() => {
      transitioning.current = false;
    }, transitionTime);

    const nextSlideTimeout = setTimeout(() => {
      if (isMinimized) return;
      dispatch({ type: 'NEXT', payload: { length } });
    }, interval);

    return () => {
      clearTimeout(nextSlideTimeout);
      clearTimeout(transitionTimeout);
    };
  });

  return [state.slideIndex, state.direction, handleChangeSlide];
}
