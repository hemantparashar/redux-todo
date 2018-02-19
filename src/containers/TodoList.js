import TodoList from '../components/TodoList';
import {connect} from 'react-redux';

const getVisibleTodos = (todos,filter)=>{
    switch(filter){
        case "SHOW_ALL":
            return todos;
            break;
        case "SHOW_ACTIVE":
            return todos.filter(todo=>!todo.completed)
            break;
        case "SHOW_COMPLETED":
            return todos.filter(todo=>todo.completed)
            break;
    }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
  }
};

export default connect(mapStateToProps)(TodoList);
