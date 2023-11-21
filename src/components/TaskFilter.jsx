// src/components/TaskFilter.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { sortTasks } from '../reducers/taskReducer';

const TaskFilter = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  // State to manage the selected sorting method
  const [sortMethod, setSortMethod] = useState('dueDate');

  // Handle sorting method change
  const handleSortMethodChange = (e) => {
    setSortMethod(e.target.value);
  };

  // Handle form submission for sorting
  const sort = (e) => {
    e.preventDefault();
    dispatch(sortTasks(sortMethod));
  };

  // Render the task filter component
  return (
    <form onSubmit={sort}>
      <select
        id="sortMethod"
        name="sortMethod"
        value={sortMethod}
        onChange={handleSortMethodChange}
      >
        <option value="dueDate">Due Date</option>
        <option value="startingDate">Starting Date</option>
      </select>
      <button type="submit" id='sortTasks'>Sort Tasks</button>
    </form>
  );
};

export default TaskFilter;
