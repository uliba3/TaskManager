import React, { useState } from 'react';

const TaskFilter = ({ tasks, onSort }) => {
    const [sortMethod, setSortMethod] = useState('dueDate');

    const sortTasks = (e) => {
        e.preventDefault();
        onSort(sortMethod);
    };

    const handleSortMethodChange = (e) => {
        setSortMethod(e.target.value);
    };

    return (
        <form onSubmit={sortTasks}>
            <select id="sortMethod"
                name="sortMethod"
                value={sortMethod}
                onChange={handleSortMethodChange}
            >
                <option value="dueDate">Due Date</option>
                <option value="startingDate">Starting Date</option>
            </select>
            <button type="submit">Sort Tasks</button>
        </form>
    );
};

export default TaskFilter;
