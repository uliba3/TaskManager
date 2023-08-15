import React, { useState } from 'react';

const TaskItem = ({ task, deleteTask, editTask, checkTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if(checkTask(editedTask)){
      editTask(task, editedTask);
      setIsEditing(false);
    }
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask.task}
            onChange={(e) => setEditedTask({ ...editedTask, task: e.target.value })}
          />
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
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.task}</span>
          <p>{task.startDate}~{task.endDate}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
