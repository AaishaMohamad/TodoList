import React from "react";
import TodoItem from "./TodoItem.js";

const TodoList = (props) => {
  function createListItem(item) {
    return <TodoItem todo={item} completedTodo={props.completedTodo} />;
  }

  return <ul>{props.todo.map(createListItem)}</ul>;
};

export default TodoList;
