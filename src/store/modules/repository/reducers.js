import produce from 'immer';

const INITIAL_STATE = {
  repository: [],
  dataSet: [],
};

export default function repository(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@repository/GO_TO_DETAILS':
      return produce(state, draft => {
        draft.repository = action.payload.repository;
      });
    case '@repository/FILTER_REPOS':
      return produce(state, draft => {
        draft.dataSet = action.payload.dataSet;
      });
    default:
      return state;
  }
}