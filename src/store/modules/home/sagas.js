import { call, put, all, takeLatest } from 'redux-saga/effects';
import { navigate } from '../../../services/navigation';
import api from '../../../services/api';

import { infoUser, reposUser } from './actions';
import { filterRepos } from '../repository/actions';

function* requestUsername({ payload }) {
  const { username } = payload;
  try {
    const { data: user } = yield call(api.get, `/users/${username}`);
    const { data: repos } = yield call(api.get, `/users/${username}/repos`);

    yield put(infoUser(user));
    yield put(reposUser(repos));
    yield put(filterRepos(repos));

    navigate('Repositories');
  } catch (err) {
    console.log(err);
  }
}

function backHome() {
  navigate("Home");
}

export default all([
  takeLatest('@home/REQUEST_INFOS_USER', requestUsername),
  takeLatest('@home/BACK_HOME', backHome),
]);
