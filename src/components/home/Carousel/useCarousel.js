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
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function useCarousel({ length, interval, transitionTime }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isMinimized, setIsMinimized] = useState(false);

  // Transitioning state is stored here to prevent unnecessary rerenders caused
  // by storing it inside the reducer.
  const isTransitioning = useRef(false);

  const handleChangeSlide = (type, index) => {
    if (isTransitioning.current) return;

    isTransitioning.current = true;
    dispatch({ type, payload: { index, length } });
  };

  // Stops the carousel whilst the browser window is minimized to prevent
  // animation playing incorrectly when the browser is maximized.
  useEffect(() => {
    const handleWindowMinimized = () => setIsMinimized(!isMinimized);

    document.addEventListener('visibilitychange', handleWindowMinimized);

    return () => {
      document.removeEventListener('visibilitychange', handleWindowMinimized);
    };
  }, [isMinimized]);

  useEffect(() => {
    if (isMinimized) return undefined;

    const transitionTimeout = setTimeout(() => {
      isTransitioning.current = false;
    }, transitionTime);

    const nextSlideTimeout = setTimeout(() => {
      handleChangeSlide('NEXT');
    }, interval);

    return () => {
      clearTimeout(nextSlideTimeout);
      clearTimeout(transitionTimeout);
    };
  });

  return [state.slideIndex, state.direction, handleChangeSlide];
}
