import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditInfo = ({ url, isMode }) => {
  //   const [formData, setFormData] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  // .then((res) => res.json())
  const getData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    data.forEach((todo) => {
      setTaskName(todo.todo_name);
      setDeadline(todo.todo_date);
    });
  };

  useEffect(() => {
    getData(url);
  }, []);

  const data = { todo_name: taskName, todo_date: deadline };

  function formHandler(e) {
    e.preventDefault();
    fetch(url + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setTaskName("");
    setDeadline("");
    navigate("/");
  }

  return (
    <div className="editPage">
      <h1
        className={
          isMode
            ? "px-3 pb-2 border-bottom bg-dark text-light fs-2 text-center"
            : "px-3 pb-2 border-bottom bg-light text-dark fs-2 text-center"
        }
      >
        Edit task
      </h1>
      <div className="text-white ">
        <Link to="/">
          <button className="btn btn-danger backToHome">back</button>
        </Link>
        <form
          onSubmit={formHandler}
          className={isMode ? "bg-dark w-100" : "bg-light w-100"}
        >
          <div className="input-group mb-3 container py-4">
            <input
              value={taskName}
              type="text"
              className={
                isMode
                  ? "form-control bg-dark text-white shadow-none"
                  : "form-control bg-light text-dark shadow-none border border-lg border-dark"
              }
              placeholder="task"
              aria-label="task"
              required
              onChange={(e) => setTaskName(e.target.value)}
            />
            <span
              className={
                isMode
                  ? "input-group-text bg-dark"
                  : "input-group-text bg-light  border border-lg border-dark "
              }
            >
              <button className="btn btn-success btn-lg">
                <i className="fa-solid fa-pen-to-square fa-beat"></i>
              </button>
            </span>
            <input
              value={deadline}
              type="text"
              className={
                isMode
                  ? "form-control bg-dark text-white shadow-none"
                  : "form-control bg-light text-dark shadow-none border border-lg border-dark"
              }
              placeholder="deadline"
              aria-label="deadline"
              required
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditInfo;
