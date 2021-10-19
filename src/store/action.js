export const OPEN_OR_NOT_MENU = 'OPEN_OR_NOT_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';
export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_ALL_PROJECTS_SUCCESS = 'GET_ALL_PROJECTS_SUCCESS';
export const GET_ALL_PROJECTS_ERROR = 'GET_ALL_PROJECTS_ERROR';

export const createOpenOrNotMenuAction = () => ({
  type: OPEN_OR_NOT_MENU,
});

export const createCloseMenuAction = () => ({
  type: CLOSE_MENU,
});

export const createGetProjectsSuccess = (projects) => ({
  type: GET_PROJECTS_SUCCESS,
  projects,
});

export const createGetProjectsError = () => ({
  type: GET_PROJECTS_ERROR,
});

export const createGetAllProjectsSuccess = (allProjects) => ({
  type: GET_ALL_PROJECTS_SUCCESS,
  allProjects,
});

export const createGetAllProjectsError = () => ({
  type: GET_ALL_PROJECTS_ERROR,
});
