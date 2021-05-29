import { combineReducers } from 'redux';
import auth from './auth.reducers';
import category from './category.reducers';

const rootReducer = combineReducers({
  auth, 
  category,
  
})

export default rootReducer;