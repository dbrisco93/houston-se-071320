import { createStore } from 'redux';
import sushiReducer from './reducers/sushiReducer';
import userReducer from './reducers/userReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  sushiState: sushiReducer,
  userState: userReducer
})

const store = createStore(
  sushiReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
