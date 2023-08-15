import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
