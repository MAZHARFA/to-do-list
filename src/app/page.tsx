"use client";
import { useState, JSX } from 'react'; 
import { MdCheck, MdDeleteForever } from "react-icons/md";

import './App.css';

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState<(string | JSX.Element)[]>([]);

const handleInputChange = (value: string) => {
  setInputValue(value);
};



  

 


  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    
    setInputValue("");
  };
  
  
  
  const handleCheckTask = (index: number) => {
    
    setTask((prevTask) => {
      const updatedTask = [...prevTask];
      updatedTask[index] = <s>{updatedTask[index]}</s>;
      return updatedTask;
    });
  };
  const handleDeleteTask = (index: number) => {
    setTask((prevTask) => prevTask.filter((_, i) => i !== index));
  };

 

  return (
    <div>
      <h1>To-do-list</h1> 
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text"
          placeholder='Enter a Todo' 
          className="task input" 
          autoComplete="off" 
          value={inputValue}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button className="button-add" type="submit">Add Task</button>
      </form>
        <ul>
          {
            task.map((curTask, index) => {
              return (
                <li key={index} className="Todo-items">
                  <span>{curTask}</span>
                  <button className="check-btn" onClick={() => handleCheckTask(index)} title="Check Task">
                    <MdCheck />
                  </button>
                    
                   
                    <button className="delete-btn" onClick={() => handleDeleteTask(index)} title="Delete Task">
                      <MdDeleteForever />
                    </button>
                  </li>
                );
              })
            }             
          </ul>
    </div>
  );
}
