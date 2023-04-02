import "./App.css";
import { useEffect, useState } from "react";
import TodoBody from "./components/TodoBody";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutTask from "./components/AboutTask";
import EditInfo from "./components/EditInfo";
import NotFound from "./components/notFound/NotFound";
import CircleButton from "./components/circleButton/CircleButton";

function App() {
  const url = "http://localhost:3000/todos";

  const [formData, setFormData] = useState([]);
  const [isMode, setisMode] = useState(false);

  // .then((res) => res.json())
  const getData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setFormData(data);
  };

  useEffect(() => {
    getData(url);
  }, [formData]);

  // deleting function
  function deleteHandler(id) {
    if (window.confirm("are you sure to delete the task ?")) {
      fetch(url + "/" + id, {
        method: "DELETE",
      });
    }
  }

  return (
    <div className={isMode ? "App bg-dark" : "App bg-light"}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TodoBody
                formData={formData}
                url={url}
                deleteHandler={deleteHandler}
                isMode={isMode}
              />
            }
          />
          <Route
            path="about/:id"
            element={
              <AboutTask
                url={url}
                deleteHandler={deleteHandler}
                isMode={isMode}
              />
            }
          />
          <Route
            path="edit/:id"
            element={<EditInfo url={url} isMode={isMode} />}
          />
          {/* <Route path=":/edit/:id" element={<EditInfo url={url} />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CircleButton isMode={isMode} setisMode={setisMode} />
      </Router>
    </div>
  );
}

export default App;
