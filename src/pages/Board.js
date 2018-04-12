import React, {Component} from 'react'
import Square from '../components/Square'
import './Board.css'

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// set up an in State representation of the game board, use it to track changes as the game is played
			board: [0,0,0,0,0,0,0,0,0],
			// keep track of which player's turn it is
			count: 0
		}
		// TODO: The game should reset to an unplayed state when a player wins
	}

	// handleClick takes in a click event and logs the target
	handleClick(e){
		console.log(e.target);
		// TODO: handleClick should update state for the square that was clicked and advance the turn to the next player
	}

	render() {
		// create a variable "board" to contain a copy of the board object in state
		let { board } = this.state

		// map over each item in board, creating a new square element (instance of the Square class/component) each time
		let squares = board.map(function(square, index){
			return(
				<Square content={index} onClick={this.handleClick} />
			)
		})

		//TODO: The onClick functionatlity for each square needs to be built out.

		return(
			<div id="Board">
				{ squares }
			</div>
		)
	}
}

export default Board
