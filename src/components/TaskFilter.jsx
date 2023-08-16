// src/components/TaskFilter.jsx
import React, { useState } from 'react';

const TaskFilter = ({ tasks, onSort }) => {
  // State to manage the selected sorting method
  const [sortMethod, setSortMethod] = useState('dueDate');

  // Handle sorting method change
  const handleSortMethodChange = (e) => {
    setSortMethod(e.target.value);
  };

  // Handle form submission for sorting
  const sortTasks = (e) => {
    e.preventDefault();
    onSort(sortMethod);
  };

  // Render the task filter component
  return (
    <form onSubmit={sortTasks}>
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
