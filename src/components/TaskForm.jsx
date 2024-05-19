// src/components/TaskForm.jsx
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const TaskForm = ({ addTask, editTask, editingTask }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      status: "To Do",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      description: Yup.string().max(200, "Must be 200 characters or less"),
      status: Yup.string()
        .oneOf(["To Do", "In Progress", "Done"], "Invalid Status")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (editingTask) {
        editTask({ ...values, id: editingTask.id });
      } else {
        addTask(values);
      }
      resetForm();
    },
  });

  useEffect(() => {
    if (editingTask) {
      formik.setValues({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
      });
    } else {
      formik.resetForm();
    }
  }, [editingTask]);

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label className="block">Title</label>
        <input
          type="text"
          id="title"
          {...formik.getFieldProps("title")}
          className="mt-1 p-2 border rounded w-full"
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="text-red-500">{formik.errors.title}</div>
        ) : null}
      </div>
      <div>
        <label className="block">Description</label>
        <textarea
          id="description"
          {...formik.getFieldProps("description")}
          className="mt-1 p-2 border rounded w-full"
        ></textarea>
        {formik.touched.description && formik.errors.description ? (
          <div className="text-red-500">{formik.errors.description}</div>
        ) : null}
      </div>
      <div>
        <label className="block">Status</label>
        <select
          id="status"
          {...formik.getFieldProps("status")}
          className="mt-1 p-2 border rounded w-full"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        {formik.touched.status && formik.errors.status ? (
          <div className="text-red-500">{formik.errors.status}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
