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

			winningCombos: [
				              [0,1,2],
											[3,4,5],
											[6,7,8],
											[0,3,6],
											[1,4,7],
											[2,5,8],
											[0,4,8],
											[2,4,6]
			]

		}
		// TODO: The game should reset to an unplayed state when a player wins
    this.handleClick = this.handleClick.bind(this)
		this.checkForWin = this.checkForWin.bind(this)
	}

	// handleClick takes in a click event and logs the target
	handleClick(e){
		// console.log(e.target);
		// console.log(this.state.board);
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

		if (this.checkForWin())
		{
        alert("GAME FINISHED " + newTurn + " WON !!!")
        return
		}

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

		if (playedArray.length < 3)
		{
			 return;  //  No need to check
		}

		console.log("Played Array for " + currentTurn + " : is " + playedArray)

		let win = this.state.winningCombos;

		let winFlag = false
		//let winCount = 0

		for (let i = 0; i < win.length; i++) // looping winCombo Array, 9 elements
    {
      let winCombo = win[i]; // setting the i th  winComob to winCombo

      //let winFlag = false
			let matchCount = 0

			for (let j = 0; j < winCombo.length;j++) //looping winCombo, 3 elements
			{
				  if (!playedArray.includes(winCombo[j]))
					{
						 winFlag = false;
						 break;
					}
					else
					{
             matchCount++
					}
			}

      if (matchCount == 3)
			{
				winFlag = true
				break
			}

		}

		console.log("WIN STATUS: " + winFlag)
    return winFlag
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

		return(
			<div id="Board" onClick={this.handleClick} >
				{ squares }
			</div>
		)
	}
}

export default Board
