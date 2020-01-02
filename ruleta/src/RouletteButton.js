import React from 'react';
import { Component } from 'react';

export class RouletteButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onClick : props.onClick
		}
	}
	render = () => { 
		return (
			<div className="roulette-button">
				<button onClick={this.state.onClick} className="button" > Tirar! </button>
			</div>
		)
	}
}