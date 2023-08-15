import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTaskOrder = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const editTask = (oldTask, newTask) => {
    const updatedTasks = tasks.map((task) => (task === oldTask ? newTask : task));
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const checkTask = (task) => {
    if (task.trim() !== '' && (startDate <= endDate || startDate === '' || endDate === '')){
      return true;
    }else {
      return false;
    }
  }

  const handleSort = (sortMethod) => {
    const sorted = [...tasks];
    if(sortMethod === "dueDate") {
      sorted.sort((a, b) => {
        // Check for empty endDate values and move them to the bottom
        if (a.endDate === '' && b.endDate !== '') {
          return 1; // Move a to the bottom
        }
        if (a.endDate !== '' && b.endDate === '') {
          return -1; // Move b to the bottom
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

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} checkTask={checkTask}/>
      <TaskFilter tasks={tasks} onSort={handleSort} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTaskOrder={updateTaskOrder} editTask={editTask} checkTask={checkTask} />
    </div>
  );
}

export default App;

