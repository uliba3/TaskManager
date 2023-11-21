// reducers/taskReducer.js
import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action) => [...state, action.payload],
    editTask: (state, action) => {
      const { oldTask, newTask } = action.payload;
      return state.map(task => (task === oldTask ? newTask : task));
    },
    deleteTask: (state, action) => state.filter(task => task !== action.payload),
    sortByDueDate: (state) => [...state].sort((a, b) => sortByDueDateComparator(a, b)),
    sortByStartingDate: (state) => [...state].sort((a, b) => a.startDate.localeCompare(b.startDate)),
  },
});

const sortByDueDateComparator = (a, b) => {
  if (a.endDate === '' && b.endDate !== '') {
    return 1;
  }
  if (a.endDate !== '' && b.endDate === '') {
    return -1;
  }
  return a.endDate.localeCompare(b.endDate);
};

export const { setTasks, addTask, editTask, deleteTask, sortByDueDate, sortByStartingDate } = taskSlice.actions;

export const initializeTasks = () => (dispatch) => {
  try {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('tasksFromLocalStorage', tasksFromLocalStorage);
    dispatch(setTasks(tasksFromLocalStorage));
  } catch (error) {
    console.error('Error initializing tasks:', error);
  }
};

export const updateTasks = (newTasks) => (dispatch) => {
  dispatch(setTasks(newTasks));
  saveTasksToLocalStorage(newTasks);
}

export const createTask = (newTask) => (dispatch, getState) => {
  dispatch(addTask(newTask));
  const updatedTasks = getState().tasks;
  saveTasksToLocalStorage(updatedTasks);
};

export const changeTask = (oldTask, newTask) => (dispatch, getState) => {
  dispatch(editTask(oldTask, newTask));
  const updatedTasks = getState().tasks;
  saveTasksToLocalStorage(updatedTasks);
};

export const eraseTask = (taskToDelete) => (dispatch, getState) => {
  dispatch(deleteTask(taskToDelete));
  const updatedTasks = getState().tasks;
  saveTasksToLocalStorage(updatedTasks);
};

export const isTaskValid = (task) => {
  return task.task.trim() !== '' && (task.startDate <= task.endDate || task.startDate === '' || task.endDate === '');
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const sortTasks = (sortMethod) => (dispatch, getState) => {
  if (sortMethod === 'dueDate') {
    dispatch(sortByDueDate());
  }
  if (sortMethod === 'startingDate') {
    dispatch(sortByStartingDate());
  }
  const updatedTasks = getState().tasks;
  saveTasksToLocalStorage(updatedTasks);
};

export default taskSlice.reducer;
