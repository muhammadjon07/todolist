import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const TodoForm = ({ url, isMode }) => {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");

  const data = { todo_name: taskName, todo_date: deadline };

  function formHandler(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setTaskName("");
    setDeadline("");
  }

  return (
    <form onSubmit={formHandler} className={isMode ? "bg-dark" : "bg-light"}>
      <h1
        className={
          isMode ? "text-center pt-3 text-white" : "text-center pt-3 text-dark"
        }
      >
        Enter task
      </h1>
      <div className="input-group mb-3 container py-4">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          className={
            isMode
              ? "form-control bg-dark text-white shadow-none"
              : "form-control bg-light text-dark border border-lg border-dark shadow-none"
          }
          placeholder="task"
          aria-label="task"
          required
        />
        <span
          className={
            isMode
              ? "input-group-text bg-dark"
              : "input-group-text bg-light  border border-lg border-dark "
          }
        >
          {/* <i className="fa-solid fa-list-ol fa-beat"></i> */}
          <Tippy content="add to queue">
            <button className="btn btn-success">
              <i className="fa-solid fa-plus fa-spin"></i>
            </button>
          </Tippy>
        </span>
        <input
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          type="text"
          className={
            isMode
              ? "form-control bg-dark text-white shadow-none"
              : "form-control bg-light text-dark border border-lg border-dark shadow-none"
          }
          placeholder="deadline"
          aria-label="deadline"
          required
        />
      </div>
    </form>
  );
};

export default TodoForm;
