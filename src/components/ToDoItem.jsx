import React, { useId } from "react";
import { Button, InputGroup, Form, ListGroup } from "react-bootstrap";

const ToDoItem = ({ todo }) => {
  const id = useId();
  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between list-item">
      <div className="d-flex align-items-center">
        {/* Direkte Verwendung des Form.Check zur besseren Kontrolle */}
        <Form.Check type="checkbox" id={id} />
        <Form.Label htmlFor={id} className="mb-0 ms-2">
          {todo.text}
        </Form.Label>
      </div>
      <Button variant="danger">Löschen</Button>
    </ListGroup.Item>
  );
};

export default ToDoItem;
