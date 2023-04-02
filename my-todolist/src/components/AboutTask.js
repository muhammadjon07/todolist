import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AboutTask = ({ url, deleteHandler, isMode }) => {
  const { id } = useParams();

  const [aboutTask, setAboutTask] = useState({});

  const getData = async (url) => {
    const res = await fetch(url + "/" + id);
    const data = await res.json();
    setAboutTask(data);
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return (
    <div className="text-white aboutCard">
      <Link to="/">
        <button className="btn btn-danger backToHome">back</button>
      </Link>
      <div
        className={
          isMode
            ? "card bg-dark mx-auto"
            : "card bg-light text-dark mx-auto  border border-lg border-dark "
        }
        style={{ width: "28rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">{aboutTask.todo_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {aboutTask.todo_date}
          </h6>
          <p className="card-text">
            you planned to <i>{aboutTask.todo_name}</i> until{" "}
            <i>{aboutTask.todo_date}</i>. you can change or cancel it if you
            want
          </p>
          <Link to="/">
            <button
              className="card-link btn-sm btn btn-danger"
              onClick={() => {
                deleteHandler(aboutTask.id);
              }}
            >
              delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutTask;
