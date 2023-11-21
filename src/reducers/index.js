// reducers/index.js
import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  // Add other reducers as needed
});

export default rootReducer;
