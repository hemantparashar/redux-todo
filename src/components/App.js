import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../containers/TodoList';

const App = () => (
    <div>
      <h2>Todos</h2>
      <AddTodo />
      <TodoList />
    </div>
);

export default App;
