import React, { Component } from 'react';
import Board from './Board.js'

class ResetButton extends Component {
  render() {
		return(
      <div>
        <button onClick={this.props.reset}>Reset</button>
      </div>
		)
	}
}








export default ResetButton
