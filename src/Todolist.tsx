import React from "react";

// здесь типизация props
export type TodolistType = {
  title: string;
  tasks: TaskType[];
  removeTask: (elId: number) => void;
};
//----end---

// типизация массива Task
export type TaskType = {
  id: number;
  checkbox: boolean;
  title: string;
};
//---end---



export const Todolist: React.FC<TodolistType> =(props)=> {

  
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => {
          return (
            <li key={t.id}>
              <button onClick={()=>props.removeTask(t.id)}>X</button>
              <input type="checkbox" checked={t.checkbox} />
              <span>{t.title}</span>
            </li>
          );
        })}

        {/* <li>
          <input type="checkbox" checked={props.tasks[0].checkbox} />
          <span>{props.tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={true} />
          <span>JS</span>
        </li>
        <li>
          <input type="checkbox" checked={false} />
          <span>React</span>
        </li> */}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
