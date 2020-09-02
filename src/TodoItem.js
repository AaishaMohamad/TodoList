import React from "react";
import "./App.css";
const TodoItem = (props) => {
  function handleCompleted() {
    props.completedTodo(props.todo.value);
  }
  return (
    <li className={props.todo.completed ? "completed" : ""}>
      <input type="checkbox" onChange={handleCompleted} />
      <label>{props.todo.value}</label>
    </li>
  );
};

export default TodoItem;
