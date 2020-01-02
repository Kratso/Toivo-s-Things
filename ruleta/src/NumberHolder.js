import * as React from 'react';

export const NumberHolder = (props) => {
	return (
		<div className="number-holder">
			<p className="focus-in-contract">{props.value}</p>
		</div>
	)
}
