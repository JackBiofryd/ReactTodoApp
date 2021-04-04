import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoInfo extends Component {
	render() {
		const { all, completed, left } = this.props.counts;
		return (
			<div>
				<h3 className="filter-lead">Todos</h3>
				<ul className="list list-info">
					<li className="list-info-item">All: {all}</li>
					<li className="list-info-item">Completed: {completed}</li>
					<li className="list-info-item">Not Completed: {left}</li>
				</ul>
			</div>
		);
	}
}

export default connect(state => ({
	counts: state.todosState.counts
}))(TodoInfo);
