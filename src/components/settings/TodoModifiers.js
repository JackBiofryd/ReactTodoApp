import React, { Component } from 'react';
import { clearAll, completeAll } from '../../actions/todosActions';
import store from '../../store';

export default class TodoFilters extends Component {
	onClearClick = () => store.dispatch(clearAll());

	onCompleteClick = () => store.dispatch(completeAll());

	render() {
		return (
			<div>
				<h3 className="filter-lead">Modifiers</h3>
				<ul className="list list-modifiers">
					<li
						className="list-modifiers-item"
						onClick={this.onCompleteClick}>
						Mark All Completed
					</li>
					<li
						className="list-modifiers-item"
						onClick={this.onClearClick}>
						Clear All
					</li>
				</ul>
			</div>
		);
	}
}
