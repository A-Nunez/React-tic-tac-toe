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
			turn: "X",
			playerX: [],
			playerY: []

		}
		// TODO: The game should reset to an unplayed state when a player wins
    this.handleClick = this.handleClick.bind(this)
		this.checkForWin = this.checkForWin.bind(this)
	}

	// handleClick takes in a click event and logs the target
	handleClick(e){
		console.log(e.target);
		console.log(this.state.board);

    let playedSquare = e.target.innerHTML

    let newBoard = this.state.board
		let newTurn = this.state.turn

		if (newBoard[playedSquare] !== 0)
		{
      console.log("square: " + playedSquare + " played already!!")
			return;
		}
    else {
			newBoard[playedSquare] = this.state.turn
			e.target.innerHTML = newTurn
    }
		this.checkForWin()

		if (newTurn === "X")
		{
			 newTurn = "O"
		}
		else
		{
			 newTurn = "X"
		}

		this.setState({
	    board: newBoard,
			turn: newTurn
	  }) // end of setState

    console.log(this.state.board)

 } //end of handleClick()

  checkForWin() {
		let newBoard = this.state.board
		let currentTurn = this.state.turn
		let playedArray = []

    for (let i = 0; i < newBoard.length; i++)
		{
			if (newBoard[i] === currentTurn)
			{
				playedArray.push(i)
			}
		}

		console.log("Winning Array for " + currentTurn + " : is " + playedArray)
    // let playerArray = newBoard.filter(x => x === currentTurn)
		// console.log(playerArray)
    // console.log("Checking for Winning")
	}

	render() {
		// create a variable "board" to contain a copy of the board object in state
		let { board } = this.state

		// map over each item in board, creating a new square element (instance of the Square class/component) each time
		let squares = board.map(function(square, index){
			return(
				<Square content={index} />
			)
		})

		//TODO: The onClick functionatlity for each square needs to be built out.

		return(
			<div id="Board" onClick={this.handleClick}>
				{ squares }
			</div>
		)
	}
}

export default Board
