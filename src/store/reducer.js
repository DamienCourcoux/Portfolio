import {
  OPEN_OR_NOT_MENU,
  CLOSE_MENU,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
} from 'src/store/action';

const initialState = {
  projects: [],
  isOpen: false,
  hasError: false,
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
    case GET_PROJECTS:
      return {
        ...state,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.projects,
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        hasError: true,
      };
    default:
      return state;
  }
};

export default reducer;
