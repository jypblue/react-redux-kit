/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-17 13:39:26
 * @version $Id$
 */
import Wilddog from 'wilddog/lib/wilddog-node';
import * as types from '../constants/wtodo';

let wilddog=new Wilddog('https://react-redux-kit.wilddogio.com')

/**
 * action function
 */

export function getTodo() {
  return (dispatch,getState)=>{
    //
    wilddog.child('wtodo').once('value', (snapshot)=>{
      let obj = snapshot.val();
      let array=[];
      for(let key in obj){
        array.push({key:key,text:obj[key].text})
      }
      dispatch({
        type: types.GET_TODO_OK,
        payload:array
      });
    },(err)=>{
      dispatch({
        type:types.GET_TODO_ERROR,
        payload:err
      });
    });
  }
}


export function addTodo(text) {
  return (dispatch,getState)=>{
    wilddog.child('wtodo').push({
      text
    },(err)=>{
      if (err) {
        // statement
        dispatch({
          type:types.ADD_TODO_ERROR,
          payload:err
        });
      }
    });
  }
}

export function removeTodo(key) {
  return (dispatch,getState)=>{
    wilddog.child(`wtodo/${key}`).remove(
      (err)=>{
        if (err) {
          // statement
          dispatch({
            type:types.REMOVE_TODO_ERROR,
            payload:err
          });
        }
      }
    );
  }
}

export function registerListeners() {
  return (dispatch, getState) => {
    wilddog.child('wtodo').on('child_removed',
      snapshot =>{
        dispatch({
          type: types.REMOVE_TODO_OK,
          payload:snapshot.key()
        })
      }
    );

    wilddog.child('wtodo').on('child_added',
      snapshot=> dispatch({
        type: types.ADD_TODO_OK,
        payload:Object.assign({}, snapshot.val(),{
          key:snapshot.key()
        })
      }));
  }
}


























