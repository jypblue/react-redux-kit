/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-17 14:47:49
 * @version $Id$
 */
import React, {Component, PropTypes} from 'react';
export default class Todo extends Component {

  render() {
    return (
      <li>
        {this.props.wtodo.text}
        <button onClick={this.props.remove.bind(this,this.props.wtodo.key)}>
          remove
        </button>
      </li>
    )
  }
}

Todo.propTypes = {
  remove: PropTypes.func.isRequired,
  wtodo:PropTypes.object.isRequired
}
