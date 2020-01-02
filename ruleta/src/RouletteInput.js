import React from 'react';
import { Component } from 'react';

export class RouletteInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onChange : props.onChange,
		}
	}

	render = () => {
		return (
			<div className="roulette-inp" >
				<input value={this.props.value} onChange={(e)=>this.state.onChange(e.currentTarget.value)} className="input"/>
			</div>
		)
	}
}