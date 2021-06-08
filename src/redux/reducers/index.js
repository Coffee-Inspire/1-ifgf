import { combineReducers } from 'redux';
import auth from './auth.reducers';
import category from './category.reducers';
import about from './about.reducers';
import event from './event.reducers';
import icare from './icare.reducers';
import profileWeb from './profileWeb.reducers';
import email from './email.reducers';

const rootReducer = combineReducers({
  auth, 
  category,
  about,
  event,
  icare,
  profileWeb,
  email
})

export default rootReducer;