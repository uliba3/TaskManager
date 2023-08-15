import React, { useState } from 'react';


const TaskForm = ({ addTask, checkTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (checkTask({ task, startDate, endDate })) {
        addTask({ task, startDate, endDate });
        setTask('');
        setStartDate('');
        setEndDate('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  };
  
  export default TaskForm;
  
