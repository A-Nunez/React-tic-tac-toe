import React, {Component} from 'react'
import Square from '../components/Square'
import './Board.css'
import Display from './Display'
import ResetButton from './ResetButton'

// Static winning combinations
const winningCombos = [ [0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
			]

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// set up an in State representation of the game board, use it to track changes as the game is played
		board: ['', '', '', '', '', '', '', '', ''],
			// keep track of which player's turn it is
			turn: "X",
			winner: null,


		}
		// TODO: The game should reset to an unplayed state when a player wins
    this.handleClick = this.handleClick.bind(this)
		this.checkForWin = this.checkForWin.bind(this)
	}

	// handleClick takes in a click event and logs the target
	handleClick(id,e){
    let playedSquare = id

    let newBoard = this.state.board
		let newTurn = this.state.turn
		// Check to see if square has been played
		if (newBoard[playedSquare] !== '') {
      console.log("square: " + playedSquare + " played already!!")
			return;
		}
    else { // Square has not been played, therefore set with new turn
			newBoard[playedSquare] = this.state.turn
    }
		// Once square is played, check to see if there is winner
		if (this.checkForWin()) {
        //this.reset()
        return
		}
		// We are changing turns
		if (newTurn === "X") {
			 newTurn = "O"

		} else {
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
		// Building a played array
    for (let i = 0; i < newBoard.length; i++)
		{
			if (newBoard[i] === currentTurn)
			{
				playedArray.push(i)
			}
		}
		// If turn play is less than three, no winner, continue playing
		if (playedArray.length < 3)
		{
			 return;  //  No need to check
		}
		// console.log("Played Array for " + currentTurn + " : is " + playedArray)

		let winFlag = false
		//let winCount = 0

		// looping through winCombo to determine winning array
		for (let i = 0; i < winningCombos.length; i++) {

      let winCombo = winningCombos[i];
			// setting the i th  winComob to winCombo

      //let winFlag = false
			let matchCount = 0

			//looping winCombo, 3 elements
			for (let j = 0; j < winCombo.length;j++) {

				  if (!playedArray.includes(winCombo[j])) {
					winFlag = false;
					break;
					} else {
             matchCount++
					}
				}
      	if (matchCount == 3) {
				winFlag = true
				break
			}
		}

		if (playedArray.length > 4 && !winFlag) {
			console.log("WIN STATUS: tie")

			this.setState( {
				winner: "Game has tied, you idiots."
			})
		}
		else {
			console.log("WIN STATUS: " + winFlag)
      if (winFlag) {
				  this.setState({
					   winner: this.state.turn + " is the victor!"
			    })

		  }

    return winFlag
	}
}
reset() {
	this.setState({
		board: ['', '', '', '', '', '', '', '', ''],
		// keep track of which player's turn it is
		turn: "X",
		winner: null,
	})
}
	render() {
		// create a variable "board" to contain a copy of the board object in state
		let { board } = this.state

		// map over each item in board, creating a new square element (instance of the Square class/component) each time
		let squares = board.map((square, index) => {
			return(
				<Square content={square} onClick={this.handleClick.bind(this,index)} />
			)
		})
		// let display = ((index) => {
		// 	return(
		// 		<Display content= "HELLO"/>
		// 	)
		// })
		return(
		<div>
			<div id="Board" >
				{ squares }
			</div>
			<div id="Display">
				<Display winner={this.state.winner} />
			</div>
			<div id="ResetButton">
				<ResetButton reset={this.reset.bind(this)}/>
			</div>
		</div>
		)
	}
}

export default Board
