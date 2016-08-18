/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-17 14:47:24
 * @version $Id$
 */

import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.wtodo.map( (wtodo, index) => <Todo key={index} wtodo={wtodo} remove={this.props.remove}/>)
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  remove: PropTypes.func.isRequired,
  wtodo:PropTypes.arrayOf(PropTypes.shape({
    text:PropTypes.string.isRequired
  }).isRequired).isRequired
}
