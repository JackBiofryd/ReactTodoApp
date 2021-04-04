import React, { Component } from 'react';
import {
	toggleShowCompleted,
	toggleShowLeft
} from '../../actions/todosActions';
import store from '../../store';

export default class TodoFilters extends Component {
	state = {
		showCompleted: true,
		showLeft: true
	};

	onShowCompletedClick = () => {
		this.setState({ showCompleted: !this.state.showCompleted });
		store.dispatch(toggleShowCompleted());
	};
	onShowLeftClick = () => {
		this.setState({ showLeft: !this.state.showLeft });
		store.dispatch(toggleShowLeft());
	};

	render() {
		const { showCompleted, showLeft } = this.state;

		return (
			<div>
				<h3 className="filter-lead">Filters</h3>
				<ul className="list list-filters">
					<li className="list-filter-item">
						<i
							onClick={this.onShowCompletedClick}
							className={
								showCompleted
									? 'fas fa-check-circle checkbox'
									: 'far fa-check-circle checkbox'
							}
						/>{' '}
						Show Completed
					</li>
					<li className="list-filter-item">
						<i
							onClick={this.onShowLeftClick}
							className={
								showLeft
									? 'fas fa-check-circle checkbox'
									: 'far fa-check-circle checkbox'
							}
						/>{' '}
						Show Not Completed
					</li>
				</ul>
			</div>
		);
	}
}
