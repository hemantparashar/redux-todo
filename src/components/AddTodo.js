import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/index';

const AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <form onSubmit={ (e)=>{
        e.preventDefault();
        dispatch(addTodo(input.value));
        input.value = "";
      } }>
        <input ref={ (node)=>{input = node} } type="text" placeholder="Add Todo"/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
