/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-17 14:46:39
 * @version $Id$
 */
import React, { Component, PropTypes} from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick(e) {
    const text = this.refs.input.value.trim();
    this.props.onAddClick(text);
    this.refs.input.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
