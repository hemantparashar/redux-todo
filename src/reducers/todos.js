let i =[
    {
        id:535435,
        text:"sfdsss sd hshsd  erth gs0",
        completed:false
    },
    {
        id:5353463435,
        text:"zczxzc3455  sd hshsd  erth gs0",
        completed:false
    }
]


const todosReducer = (state=i,action)=>{
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
