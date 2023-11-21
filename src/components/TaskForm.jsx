// src/components/TaskForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createTask, isTaskValid } from '../reducers/taskReducer';

const TaskForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  // State to manage input fields
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the task is valid before adding
    if (isTaskValid({ task, startDate, endDate })) {
      dispatch(createTask({ task, startDate, endDate }));
      setTask('');
      setStartDate('');
      setEndDate('');
    }
  };

  // Render the task form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        ~
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit" id='addTask'>Add Task</button>
    </form>
  );
};

export default TaskForm;