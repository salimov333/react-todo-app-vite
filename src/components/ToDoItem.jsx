import React, { useId } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

const ToDoItem = ({ todo, handleToggle, handleDelete }) => {
  const id = useId();
  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between list-item">
      <div
        className="d-flex align-items-center"
        style={{
          textDecoration: `${todo.complete ? "line-through" : "none"}`,
          color: `${todo.complete ? "red" : "initial"}`,
        }}
      >
        {/* Direkte Verwendung des Form.Check zur besseren Kontrolle */}
        <Form.Check
          type="checkbox"
          id={id}
          onChange={() => handleToggle(todo.id)}
        />
        <Form.Label htmlFor={id} className="mb-0 ms-2">
          {todo.text}
        </Form.Label>
      </div>
      <Button variant="danger" onClick={() => handleDelete(todo.id)}>
        Löschen
      </Button>
    </ListGroup.Item>
  );
};

export default ToDoItem;
