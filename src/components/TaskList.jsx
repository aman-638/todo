// src/components/TaskList.jsx
import React from "react";

const TaskList = ({ tasks, filter, setFilter, setEditingTask, deleteTask }) => {
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div>
      <div className="mb-4">
        <label className="block mt-4">Filter</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        >
          <option>All</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>
      {filteredTasks.length > 0 ? (
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li key={task.id} className="p-4 border rounded">
              <h2 className="text-xl font-bold">{task.title}</h2>
              <p>{task.description}</p>
              <div className="mt-2">
                <select
                  value={task.status}
                  onChange={(e) => setEditingTask(task)}
                  className="p-2 border rounded"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
                <button
                  onClick={() => setEditingTask(task)}
                  className="ml-4 bg-green-500 text-white py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="ml-4 bg-red-500 text-white py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 mt-8">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
