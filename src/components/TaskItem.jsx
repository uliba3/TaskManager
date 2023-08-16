// src/components/TaskItem.jsx
import React, { useEffect, useState } from 'react';

const TaskItem = ({ task, deleteTask, editTask, checkTask }) => {
  // State to manage task editing mode and edited task details
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  // Handle edit button click
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle save button click
  const handleSave = () => {
    // Check if the edited task is valid before saving
    if(checkTask(editedTask)){
      editTask(task, editedTask);
      setIsEditing(false);
    }
  };

  //update task value if edit is clicked
  useEffect(() => {
    setEditedTask(task);
  }, [isEditing]);

  // Render the task item with edit and delete options
  return (
    <div className="task-item">
      {isEditing ? (
        <div>
          <div>
            <input
              type="date"
              value={editedTask.startDate}
              onChange={(e) => setEditedTask({ ...editedTask, startDate: e.target.value })}
            />
            ~
            <input
              type="date"
              value={editedTask.endDate}
              onChange={(e) => setEditedTask({ ...editedTask, endDate: e.target.value })}
            />
          </div>
          <input
            type="text"
            value={editedTask.task}
            onChange={(e) => setEditedTask({ ...editedTask, task: e.target.value })}
          />
          <button onClick={handleSave} className='save'>Save</button>
        </div>
      ) : (
        <div>
          <p>{task.startDate}~{task.endDate}</p>
          <span>{task.task}</span>
          <div>
            <button onClick={handleEdit} className='edit'>Edit</button>
            <button onClick={() => deleteTask(task)} className='delete'>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;