import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
};

export default TaskItem;
