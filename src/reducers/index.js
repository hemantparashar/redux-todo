import { combineReducers } from 'redux';
import todos from './todos';

let indexReducer = combineReducers({
  todos
});

export default indexReducer;
