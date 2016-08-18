/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-17 14:42:58
 * @version $Id$
 */

import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {addTodo,removeTodo} from '../actions/wtodo';
import  AddTodo from '../components/wtodo/AddTodo';
import TodoList from '../components/wtodo/TodoList';
import {getTodo,registerListeners} from '../actions/wtodo';


class Wtodo extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getTodo());
    this.props.dispatch(registerListeners())

    this.state = {};
  }

  render() {
    const { dispatch, wtodo} = this.props;
    return (
      <div>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList wtodo={wtodo} remove={ key => dispatch(removeTodo(key))}/>
      </div>
    )
  }
}

Wtodo.propTypes = {
  wtodo: PropTypes.arrayOf(PropTypes.shape({
    text:PropTypes.string.isRequired
  }))
}

function mapStateToProps(state) {
  return {
    wtodo: state.wtodo.wtodo
  }
}

export default connect(mapStateToProps)(Wtodo);
