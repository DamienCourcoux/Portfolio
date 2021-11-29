import {
  OPEN_OR_NOT_MENU,
  CLOSE_MENU,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  GET_ALL_PROJECTS,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_ERROR,
  MAKE_A_ZOOM,
} from 'src/store/action';

const initialState = {
  projects: [],
  allProjects: [],
  isOpen: false,
  hasError: false,
  isZoom: false,
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
    case GET_ALL_PROJECTS:
      return {
        ...state,
      };
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        allProjects: action.allProjects,
      };
    case GET_ALL_PROJECTS_ERROR:
      return {
        ...state,
        hasError: true,
      };
    case MAKE_A_ZOOM:
      return {
        ...state,
        isZoom: !state.isZoom,
      };
    default:
      return state;
  }
};

export default reducer;
