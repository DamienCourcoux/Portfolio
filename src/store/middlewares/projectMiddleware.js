import axios from 'axios';

import {
  GET_PROJECTS,
  createGetProjectsSuccess,
  createGetProjectsError,
} from 'src/store/action';

const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROJECTS:
      axios.get('https://api.github.com/users/DamienCourcoux/repos?per_page=2')
        .then((response) => {
          store.dispatch(createGetProjectsSuccess(response.data));
        })
        .catch(() => {
          store.dispatch(createGetProjectsError());
        });
      break;

    default:
      next(action);
      break;
  }
};

export default projectMiddleware;
