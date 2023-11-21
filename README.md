# Task Manager

Task Manager is a simple web application built with React and Redux for managing tasks. It allows users to add, edit, and delete tasks, as well as sort tasks based on due date or starting date. The application also supports drag-and-drop functionality for reordering tasks. The application is deployed and accessible at [here](https://uliba3.github.io/TaskManager/).

<div style="display: flex; justify-content: space-between;">
  <img src="assets\taskManager.gif" alt="Task Manager web app gif" width="400">
  <img src="assets\taskManagerScreenshot.png" alt="Task Manager web app Screenshot" width="400">
</div>

## Features

- **Add Task:** Users can add tasks with a specified start and end date.
- **Edit Task:** Tasks can be edited, including changes to the task name, start date, and end date.
- **Delete Task:** Users can delete tasks they no longer need.
- **Sort Tasks:** Tasks can be sorted based on due date or starting date.
- **Drag-and-Drop Reordering:** Tasks can be reordered using drag-and-drop functionality.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/uliba3/TaskManager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd TaskManager
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This will open the application in your default web browser.

## Project Structure

The project is organized into the following directories:

- **src:** Contains the source code for the React application.
  - **components:** React components used to build the UI.
  - **reducers:** Redux reducers for managing state.
  - **styles.css:** CSS file for styling the application.
- **public:** Contains the public assets, including the `index.html` file.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A predictable state container for JavaScript applications.
- **react-beautiful-dnd:** A React library for drag-and-drop functionality.
- **@reduxjs/toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
