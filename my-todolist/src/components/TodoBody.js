import { Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const TodoBody = ({ formData, url, deleteHandler, isMode }) => {
  return (
    <div>
      <TodoForm url={url} isMode={isMode} />
      <div
        className={
          isMode
            ? "px-3 pb-2 border-bottom bg-dark text-light fs-2 text-center"
            : "px-3 pb-2 border-bottom bg-light text-dark fs-2 text-center"
        }
      >
        Tasks
      </div>

      <table
        className={
          isMode
            ? "table table-dark table-hover table-bordered"
            : "table table-light table-hover table-bordered"
        }
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Deadline</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {formData.map((todos, idx) => {
          return (
            <tbody key={idx}>
              <tr>
                <th>{todos.id}</th>
                <td>{todos.todo_name}</td>
                <td>{todos.todo_date}</td>
                {/* keyinchalik actionni dropdown qilaman shunda qulayroq boladi */}
                {/* agar 2 sekunddan koproq hover bolib turilsa yuqorisida har birining oziga tegishli text chiqariladi */}
                <td className="d-flex gap-2">
                  <Tippy content="delete task">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        deleteHandler(todos.id);
                      }}
                    >
                      <i className="fa-solid fa-trash fa-shake"></i>
                    </button>
                  </Tippy>

                  <Link to={`edit/${todos.id}`}>
                    <Tippy content="edit task">
                      <button className="btn btn-sm btn-info">
                        <i className="fa-solid fa-pen-to-square fa-bounce"></i>
                      </button>
                    </Tippy>
                  </Link>
                  <Link to={`about/${todos.id}`}>
                    <Tippy content="more info about task">
                      <button className="btn btn-sm btn-success">
                        <i className="fa-solid fa-address-card fa-flip"></i>
                      </button>
                    </Tippy>
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default TodoBody;
