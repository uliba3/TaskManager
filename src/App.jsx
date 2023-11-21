// src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './styles.css';

function App() {

  // Render the main application UI
  return (
    <div className="App">
      <div>Task Manager</div>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </div>
  );
}

export default App;