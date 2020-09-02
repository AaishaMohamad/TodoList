import React, { useState } from "react";

const Header = (props) => {
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (todo !== "") {
      props.addTodo(todo);
      setTodo("");
    }
  }
  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          autoCorrect
          value={todo}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Header;
