import {
  useCallback,
  useMemo,
  createContext,
  useContext,
  useReducer,
} from 'react';

const initialState = {
  showModal: false,
  modalView: 'SIGN_IN_VIEW',
  showDropdown: false,
  dropdownMenu: null,
};

export const UIContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        showModal: true,
        dropdownMenu: null,
        showDropdown: false,
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
    case 'OPEN_DROPDOWN': {
      return {
        ...state,
        showDropdown: true,
        dropdownMenu: action.payload,
        showModal: false,
        modalView: 'SIGN_IN_VIEW',
      };
    }
    case 'CLOSE_DROPDOWN': {
      return {
        ...state,
        dropdownMenu: null,
        showDropdown: false,
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

  const handleOpenDropdown = useCallback(
    (menu) => dispatch({ type: 'OPEN_DROPDOWN', payload: menu }),
    []
  );

  const handleCloseDropdown = useCallback(
    () => dispatch({ type: 'CLOSE_DROPDOWN' }),
    []
  );

  const value = useMemo(
    () => ({
      ...state,
      handleOpenModal,
      handleCloseModal,
      handleSetModalView,
      handleOpenDropdown,
      handleCloseDropdown,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
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
