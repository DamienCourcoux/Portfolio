import { OPEN_OR_NOT_MENU, CLOSE_MENU } from 'src/store/action';

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_OR_NOT_MENU:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CLOSE_MENU:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
