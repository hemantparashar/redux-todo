const todosReducer = (state=[],action)=>{
  switch(action.type){
    case "ADD_TODO":{
      return [
        ...state,
        {
          id:Date.now(),
          text:action.text,
          completed:false
        }
      ];
      break;
    }
    case "TOGGLE_TODO":{
      return state.map(todo=>(todo.id==action.id) ? {...todo, completed : !todo.completed} : todo);
      break;
    }
    case "DELETE_TODO":{
      return state.filter(todo=>(todo.id!=action.id));
      break;
    }
    case "UPDATE_TODO":{
      return state.map(todo=>{
        if(todo.id==action.id){
          return {
            ...todo,text: action.text
          }
        }
        return todo;
      }
    );
      break;
    }
    default:
      return state;
  }
}

export default todosReducer;
