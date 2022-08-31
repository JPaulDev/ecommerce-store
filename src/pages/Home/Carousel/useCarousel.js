import { useReducer, useEffect, useRef } from 'react';

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
  const transitioning = useRef(false);

  const handleChangeSlide = (type, index) => {
    if (transitioning.current) return;
    dispatch({ type, payload: { index, length } });
  };

  useEffect(() => {
    transitioning.current = true;

    const transitionTimeout = setTimeout(() => {
      transitioning.current = false;
    }, transitionTime);

    const nextSlideTimeout = setTimeout(() => {
      dispatch({ type: 'NEXT', payload: { length } });
    }, interval);

    return () => {
      clearTimeout(nextSlideTimeout);
      clearTimeout(transitionTimeout);
    };
  });

  return [state.slideIndex, state.direction, handleChangeSlide];
}
