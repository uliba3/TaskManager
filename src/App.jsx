// src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './styles.css';

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Function to add a new task
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Function to delete a task
  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Function to update the order of tasks after dragging and dropping
  const updateTaskOrder = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  // Function to edit a task
  const editTask = (oldTask, newTask) => {
    const updatedTasks = tasks.map((task) => (task === oldTask ? newTask : task));
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Function to check if a task is valid
  const checkTask = (task) => {
    if (task.task.trim() !== '' && (task.startDate <= task.endDate || task.startDate === '' || task.endDate === '')) {
      return true;
    } else {
      return false;
    }
  }

  // Function to handle sorting tasks
  const handleSort = (sortMethod) => {
    const sorted = [...tasks];
    if(sortMethod === "dueDate") {
      sorted.sort((a, b) => {
        // Sort based on due dates
        // Move tasks with empty endDate to the bottom
        if (a.endDate === '' && b.endDate !== '') {
          return 1; // Move 'a' to the bottom
        }
        if (a.endDate !== '' && b.endDate === '') {
          return -1; // Move 'b' to the bottom
        }
        // Compare endDate values for non-empty cases
        return a.endDate.localeCompare(b.endDate);
      });
    }
    if(sortMethod === "startingDate") {
      sorted.sort((a, b) => a.startDate.localeCompare(b.startDate));
    }
    setTasks(sorted);
    localStorage.setItem('tasks', JSON.stringify(sorted));
  }

  // Render the main application UI
  return (
    <div className="App">
      <div>Task Manager</div>
      <TaskForm addTask={addTask} checkTask={checkTask}/>
      <TaskFilter tasks={tasks} onSort={handleSort} />
      <TaskList deleteTask={deleteTask} updateTaskOrder={updateTaskOrder} editTask={editTask} checkTask={checkTask} />
    </div>
  );
}

export default App;