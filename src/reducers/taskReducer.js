// reducers/taskReducer.js

const taskReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_TASK':
        return [...state, action.payload];
  
      case 'DECREMENT':
        return state.filter((task) => task !== action.payload);
  
      // Add other cases as needed
  
      default:
        return state;
    }
};

export const createTask = (newTask) => {
    return {
      type: 'CREATE_TASK',
      payload: newTask,
    };
};

export const deleteTask = (taskToDelete) => {
    return {
      type: 'DELETE_TASK',
      payload: taskToDelete,
    };
};

export default taskReducer;
  