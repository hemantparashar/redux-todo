import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../containers/TodoList';
import Footer from '../components/Footer';

const App = () => (
    <div>
      <h2>Todos</h2>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
);

export default App;
