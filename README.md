# Task Manager Application

The Task Manager Application is a web-based task management tool that allows users to add, edit, delete, and sort tasks. This README provides an overview of the application's structure and features.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Features

The Task Manager Application includes the following features:

1. **Add Task**: Users can add tasks with a task description, start date, and end date.

2. **Edit Task**: Tasks can be edited, including modifying the task description, start date, and end date.

3. **Delete Task**: Users can delete tasks.

4. **Drag-and-Drop Reordering**: Tasks can be reordered using drag-and-drop functionality.

5. **Task Sorting**: Users can sort tasks by due date or starting date.

6. **Task Validation**: Tasks are validated to ensure that they have a valid task description and that the end date is greater than or equal to the start date.

## Getting Started

To get started with the Task Manager Application, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

3. Install project dependencies using npm:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:3000` to access the Task Manager Application.

## Usage

Once you have the Task Manager Application running, you can use it to manage your tasks:

1. **Add a Task**: To add a new task, enter a task description, start date, and end date in the input fields and click the "Add Task" button.

2. **Edit a Task**: Click the "Edit" button next to a task to enter edit mode. You can modify the task details and click the "Save" button to save your changes.

3. **Delete a Task**: Click the "Delete" button next to a task to delete it.

4. **Reorder Tasks**: Use drag-and-drop to reorder tasks within the task list.

5. **Sort Tasks**: Select a sorting method from the sorting dropdown and click the "Sort Tasks" button to sort the tasks by due date or starting date.

## Project Structure

The project structure is organized as follows:

- `index.html`: The main HTML file for the application.

- `src/`: The source code directory.

  - `styles.css`: Contains the application's CSS styles.

  - `main.jsx`: The entry point of the React application.

  - `App.jsx`: The main application component that manages tasks.

  - `components/`: Contains React components.

    - `TaskForm.jsx`: The task input form component.

    - `TaskList.jsx`: The task list component with drag-and-drop support.

    - `TaskItem.jsx`: The individual task item component.

    - `TaskFilter.jsx`: The task sorting component.

- `package.json`: Contains project dependencies and scripts.

## Dependencies

The Task Manager Application uses the following dependencies:

- React: A JavaScript library for building user interfaces.

- React Beautiful DND: A library for adding drag-and-drop functionality to React components.

- React DOM: A package for rendering React components into the DOM.

- Vite: A build tool for modern web development.

- ESLint: A tool for identifying and fixing JavaScript code issues.
