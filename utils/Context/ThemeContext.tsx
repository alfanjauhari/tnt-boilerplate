import React, { createContext, useReducer } from 'react';

interface ThemeContextInitialState {
  darkMode: boolean;
}

const initialState: ThemeContextInitialState = {
  darkMode: false
};

const reducers = (state: ThemeContextInitialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: action.payload
      };
    default:
      return state;
  }
};

export const ThemeContext = createContext<{
  state: ThemeContextInitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
