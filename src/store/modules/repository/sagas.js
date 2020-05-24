import { put, all, takeLatest } from 'redux-saga/effects';
import { navigate } from '../../../services/navigation';
import { goToDetails } from './actions';

function backRepository() {
  navigate('Repositories');
}

function* goToDetailsSagas({ payload }) {
  console.log('OK');
  const { repository } = payload;
  yield put(goToDetails(repository));
  navigate('RepositoryDetails');  
}

export default all([
  takeLatest('@repository/REQUEST_DETAILS_REPO', goToDetailsSagas),
  takeLatest('@repository/BACK_REPOSITORIES', backRepository),
]);


