// src/App.jsx
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    setTasks(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await addDoc(collection(db, "tasks"), task);
    fetchTasks(); // Fetch tasks again to update the list
  };

  const editTask = async (task) => {
    const taskRef = doc(db, "tasks", task.id);
    await updateDoc(taskRef, task);
    fetchTasks(); // Fetch tasks again to update the list
    setEditingTask(null); // Reset editing task after update
  };

  const deleteTask = async (taskId) => {
    await deleteDoc(doc(db, "tasks", taskId));
    fetchTasks(); // Fetch tasks again to update the list
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4194842/pexels-photo-4194842.jpeg')",
      }}
    >
      <div className="max-w-2xl w-full mx-auto p-4 sm:p-6 lg:p-8 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg mt-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">Task Management</h1>
        <TaskForm
          addTask={addTask}
          editTask={editTask}
          editingTask={editingTask}
        />
        <TaskList
          tasks={tasks}
          filter={filter}
          setFilter={setFilter}
          setEditingTask={setEditingTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
