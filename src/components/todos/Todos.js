import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class Todos extends Component {
	render() {
		const { todos } = this.props;
		const { showCompleted, showLeft } = this.props.filters;

		return (
			<React.Fragment>
				{todos.map(todo =>
					(todo.completed && showCompleted) ||
					(!todo.completed && showLeft) ? (
						<Todo
							id={todo.id}
							text={todo.text}
							completed={todo.completed}
							key={todo.id}
						/>
					) : null
				)}
			</React.Fragment>
		);
	}
}

export default connect(state => ({
	todos: state.todosState.todos,
	filters: state.todosState.filters
}))(Todos);
