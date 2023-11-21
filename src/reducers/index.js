// reducers/index.js
import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import editingReducer from './editingReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  isThereEditing: editingReducer,
  // Add other reducers as needed
});

export default rootReducer;
