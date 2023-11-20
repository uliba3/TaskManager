// reducers/index.js
import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  counter: taskReducer,
  // Add other reducers as needed
});

export default rootReducer;
