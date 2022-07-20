import React, { useState } from "react";

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


  let [btnName, setBtnName] = useState('all')
  
  const changeFilter=(btnName: string)=>{
    setBtnName(btnName)
  }

  let filteredTasks ;

  switch(btnName){
    case 'active':
      filteredTasks = props.tasks.filter(t => t.checkbox === false)
      break
    case 'completed':
      filteredTasks = props.tasks.filter(t => t.checkbox === true)
      break 
    default:
      filteredTasks = props.tasks  
  }

  
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {filteredTasks.map((t) => {
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
        <button onClick={()=>changeFilter('all')}>All</button>
        <button onClick={()=>changeFilter('active')}>Active</button>
        <button onClick={()=>changeFilter('completed')}>Completed</button>
      </div>
    </div>
  );
};
