import React from "react";
import "./App.css";
import { Todolist} from "./Todolist";



function App() {

    const tasks = [
        { id: 1, checkbox: true, title: "HTML" },
        { id: 2, checkbox: true, title: "CSS" },
        { id: 3, checkbox: false, title: "JS/TS" },
        { id: 4, checkbox: false, title: "ReactJS" },
        { id: 5, checkbox: false, title: "Redux" },
    ];

    

  return (
    <div className="App">
          <Todolist
              title={"What to learn"}
              tasks={tasks}
          />
    </div>
  );
}

export default App;
