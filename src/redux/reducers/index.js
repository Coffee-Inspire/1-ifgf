import { combineReducers } from 'redux';
import auth from './auth.reducers';
import category from './category.reducers';
import about from './about.reducers';
import event from './event.reducers';
import icare from './icare.reducers';
import profileWeb from './profileWeb.reducers';
import email from './email.reducers';
import footer from './footer.reducers';

const rootReducer = combineReducers({
  auth, 
  category,
  about,
  event,
  icare,
  profileWeb,
  email,
  footer
})

export default rootReducer;