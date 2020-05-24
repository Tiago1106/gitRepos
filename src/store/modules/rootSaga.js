import { all } from 'redux-saga/effects';

import home from './home/sagas';
import repository from './repository/sagas';

export default function* rootSaga() {
  return yield all([
    home,
    repository,
  ]);
}