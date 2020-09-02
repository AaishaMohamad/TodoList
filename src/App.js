import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import Header from "./Header";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoItemValue) {
    const newTodoItem = {
      value: todoItemValue,
      completed: false,
    };
    setTodoList(todoList.concat(newTodoItem));
  }
  function completedTodo(todoITem) {
    function iterate(todo) {
      if (todo.value === todoITem) {
        todo.completed = true;
      }
      return todo;
    }
    const updateTodo = todoList.map(iterate);
    setTodoList(updateTodo);
  }

  return (
    <div className="App">
      <Header addTodo={addTodo} />
      <TodoList todo={todoList} completedTodo={completedTodo} />
    </div>
  );
}

export default App;
