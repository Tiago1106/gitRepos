import produce from 'immer';

const INITIAL_STATE = {
  user: [],
  repos: [],
}

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@home/INFO_USER':
      return produce(state, draft => {
        draft.user = action.payload.user;
      });
    case '@home/REPOS_USER':
      return produce(state, draft => {
        draft.repos = action.payload.repositories;
      });
    default:
      return state;
  }
}