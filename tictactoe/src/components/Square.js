import React, {Component} from 'react'

class Square extends Component {

	render() {
		return(
			<div onClick={this.props.onClick}>
			   {this.props.content}
			</div>
		)
	}
}

export default Square
