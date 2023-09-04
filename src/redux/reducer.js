import { TOGGLE_THEME } from './action';

const initialState = {
  darkTheme: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;
