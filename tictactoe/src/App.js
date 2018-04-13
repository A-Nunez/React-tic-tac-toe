import React, { Component } from 'react';
import Board from './pages/Board'
import './App.css'
import logo from './logo.svg'

class App extends Component {
	render() {
		return(
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Tic Tac Toe</h1>
				<Board />
			</header>
		</div>
	)
	}
}

export default App;
