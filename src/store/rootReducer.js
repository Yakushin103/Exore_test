import { combineReducers } from 'redux'

import products from './products/reducer'
import user from './isAuth/reducer'

const combinedReducer = combineReducers({
  products,
  user,
})

export const RESET_STORE_ACTION_TYPE = 'RESET_WHOLE_STORE';

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE_ACTION_TYPE) {
    return combinedReducer(undefined, action);
  }

  return combinedReducer(state, action);
};

export default rootReducer