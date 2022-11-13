import {
  useCallback,
  useMemo,
  createContext,
  useContext,
  useReducer,
} from 'react';

const initialState = {
  showDropdown: false,
  showModal: false,
  modalView: 'SIGN_IN_VIEW',
};

export const UIContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        showModal: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        showModal: false,
        modalView: 'SIGN_IN_VIEW',
      };
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function UIProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenModal = useCallback(
    () => dispatch({ type: 'OPEN_MODAL' }),
    []
  );

  const handleCloseModal = useCallback(
    () => dispatch({ type: 'CLOSE_MODAL' }),
    []
  );

  const handleSetModalView = useCallback(
    (view) => dispatch({ type: 'SET_MODAL_VIEW', payload: view }),
    []
  );

  const value = useMemo(
    () => ({
      ...state,
      handleOpenModal,
      handleCloseModal,
      handleSetModalView,
    }),
    [state, handleOpenModal, handleCloseModal, handleSetModalView]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const value = useContext(UIContext);

  if (!value) {
    throw new Error('useUI must be wrapped in a <UIProvider />');
  }

  return value;
}
