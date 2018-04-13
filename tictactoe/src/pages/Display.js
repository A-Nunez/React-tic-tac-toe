import React, { Component } from 'react';
import Board from './Board.js'

class Display extends Component {
  render() {
		return(
			<div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>{this.props.winner}</h2>
			</div>
		)
	}
}








export default Display
