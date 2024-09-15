import React, { useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, InputGroup, ListGroup } from "react-bootstrap";
import ToDoItem from "./ToDoItem";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: crypto.randomUUID(), text: action.text, complete: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TODO", text: inputValue.trim() });
      setInputValue("");
    } else {
      alert("Please enter a task");
    }
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", id: id });
  };
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", id: id });
  };

  return (
    <>
      <h1 className="my-5">
        Todo Liste v.1.4.0{" "}
        <FontAwesomeIcon icon={faSun} size="1x" color="#616469" spin />
      </h1>

      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Neues Todo eintagen"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button variant="success" type="submit">
            Hinzufügen
          </Button>
        </InputGroup>
      </Form>

      <ListGroup>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}/>
        ))}
      </ListGroup>
      <p className="my-3">
        Erledigte Todos: {todos.filter((todo) => todo.complete).length}
      </p>
    </>
  );
};

export default ToDoList;
