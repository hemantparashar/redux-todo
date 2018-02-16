import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo,deleteTodo,updateTodo } from '../actions/index';

class Todo extends React.Component{
  constructor(){
    super();
    this.state = {
      editing: false
    };
    this.input = "";
  }
  _editing(e){
    e.stopPropagation();
    this.setState({editing:true});
  }
  _update(id){
    let text = this.input.value;
    this.props.dispatch(updateTodo(id,text));
    this.setState({editing:false});
  }
  _delete(id,e){
      e.stopPropagation();
      this.props.dispatch(deleteTodo(id));
  }
  render(){
      let {todo, dispatch} = this.props;

      const todoComp = this.state.editing ? (
            <li style={{ textDecoration: (todo.completed ? "line-through" : "none") }}>
              <input defaultValue={todo.text} ref={ (node)=>{this.input = node} }/>
              <button onClick={this._update.bind(this,todo.id)}>Save</button>
            </li>
          ) :
          (
            <li style={{ textDecoration: (todo.completed ? "line-through" : "none") }} onClick={()=>{
                dispatch(toggleTodo(todo.id))
            }}>
              <span>{todo.text} </span>
              <button onClick={this._editing.bind(this)}>Edit</button>
              <button onClick={this._delete.bind(this,todo.id)}>Delete</button>
            </li>
          );
      return todoComp;
  }
}

export default connect()(Todo);
