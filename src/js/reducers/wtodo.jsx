/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-17 14:15:51
 * @version $Id$
 */

import {combineReducers} from 'redux';
import * as types from '../constants/wtodo';

function wtodo(state=[],action) {
  switch (action.type) {
    case types.GET_TODO_OK:
      return action.payload
    case types.ADD_TODO_OK:
      return [
        ...state,
        action.payload
      ]
    case types.REMOVE_TODO_OK:
      return state.filter(function(todo) {
        return todo.key!==action.payload;
      });
    default:
      return state;
  }
}

const wtodoApp = combineReducers({
  wtodo
});

export default wtodoApp;

