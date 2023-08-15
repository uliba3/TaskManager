import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
    return (
      <div className="task-item">
        <div>
          <span>{task.task}</span>
          <p>Start Date: {task.startDate}</p>
          <p>End Date: {task.endDate}</p>
        </div>
        <button onClick={() => deleteTask(task)}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;
  