import React from 'react';

const Todo = ({todo}) => (
  <li style={{ textDecoration: (todo.completed ? "line-through" : "none") }} >
    {todo.text}
  </li>
);

export default Todo;
