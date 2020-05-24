import { combineReducers } from 'redux';

import home from './home/reducers';
import repository from './repository/reducers';

export default combineReducers({
  home,
  repository,
});