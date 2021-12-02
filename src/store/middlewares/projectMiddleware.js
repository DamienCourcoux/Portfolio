import axios from 'axios';

import {
  GET_PROJECTS,
  createGetProjectsSuccess,
  createGetProjectsError,
  GET_ALL_PROJECTS,
  createGetAllProjectsSuccess,
  createGetAllProjectsError,
} from 'src/store/action';

const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROJECTS: {
      axios.get('https://api.github.com/users/DamienCourcoux/repos?per_page=2&sort=created')
        .then((response) => {
          store.dispatch(createGetProjectsSuccess(response.data));
        })
        .catch(() => {
          store.dispatch(createGetProjectsError());
        });
      next(action);
      break;
    }
    case GET_ALL_PROJECTS:
      axios.get('https://api.github.com/users/DamienCourcoux/repos?per_page=9&sort=created')
        .then((response) => {
          store.dispatch(createGetAllProjectsSuccess(response.data));
        })
        .catch(() => {
          store.dispatch(createGetAllProjectsError());
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default projectMiddleware;
