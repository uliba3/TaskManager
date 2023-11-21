// src/components/TaskItem.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eraseTask, changeTask, isTaskValid } from '../reducers/taskReducer';
import { setIsThereEditing } from '../reducers/editingReducer';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const isThereEditing = useSelector(state => state.isThereEditing);
  // State to manage task editing mode and edited task details
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);


  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter' && isEditing) {
      handleSave();
    }
  }

  // Handle edit button click
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle save button click
  const handleSave = () => {
    // Check if the edited task is valid before saving
    if(isTaskValid(editedTask)){
      dispatch(changeTask(task, editedTask));
      setIsEditing(false);
      dispatch(setIsThereEditing(false));
    }
  };

  //update task value if edit is clicked
  useEffect(() => {
    setEditedTask(task);
    if(isEditing){
      dispatch(setIsThereEditing(true));
    }
  }, [isEditing]);

  // Render the task item with edit and delete options
  return (
    <div className={`task-item ${isEditing ? 'editing' : ''} ${isThereEditing ? 'hidden' : 'view-mode'}`}>
      {isEditing ? (
        <div className='edit-mode'>
          <div>
            <input
              type="date"
              value={editedTask.startDate}
              onChange={(e) => setEditedTask({ ...editedTask, startDate: e.target.value })}
              onKeyDown={handleInputKeyPress} // Handle Enter key press
            />
            ~
            <input
              type="date"
              value={editedTask.endDate}
              onChange={(e) => setEditedTask({ ...editedTask, endDate: e.target.value })}
              onKeyDown={handleInputKeyPress} // Handle Enter key press
            />
          </div>
          <input
            type="text"
            value={editedTask.task}
            onChange={(e) => setEditedTask({ ...editedTask, task: e.target.value })}
            onKeyDown={handleInputKeyPress} // Handle Enter key press
          />
          <button onClick={handleSave} className='save'>Save</button>
        </div>
      ) : (
        <div className={`${isThereEditing ? 'hidden' : 'view-mode'}`}>
          <p>{task.startDate}~{task.endDate}</p>
          <span>{task.task}</span>
          <div>
            <button onClick={handleEdit} className='edit'>Edit</button>
            <button onClick={() => dispatch(eraseTask(task))} className='delete'>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;