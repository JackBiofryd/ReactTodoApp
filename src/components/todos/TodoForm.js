import React, { Component } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import { addTodo, setCurrentTodo, editTodo } from '../../actions/todosActions';
import { v4 as uuid } from 'uuid';

class TodoForm extends Component {
	state = {
		todoText: ''
	};

	UNSAFE_componentWillReceiveProps(props) {
		if (props.currentTodo) {
			this.setState({ todoText: props.currentTodo.text });
		}
	}

	onFormChange = e => this.setState({ [e.target.name]: e.target.value });

	onFormSubmit = e => {
		e.preventDefault();
		const { currentTodo } = this.props;

		if (currentTodo) {
			store.dispatch(
				editTodo({
					id: currentTodo.id,
					text: this.state.todoText,
					completed: currentTodo.completed
				})
			);
		} else {
			store.dispatch(
				addTodo({
					id: uuid(),
					text: this.state.todoText,
					completed: false
				})
			);

			store.dispatch(setCurrentTodo(null));
		}

		this.setState({ todoText: '' });
	};

	render() {
		return (
			<div>
				<form className="todo-form" onSubmit={this.onFormSubmit}>
					<input
						type="text"
						name="todoText"
						id="todoText"
						className="todo-input"
						placeholder="Your Todo..."
						required
						autoComplete="off"
						value={this.state.todoText}
						onChange={this.onFormChange}
					/>

					<input
						type="submit"
						value={this.props.currentTodo ? 'Edit' : 'Add'}
						className="btn btn-block btn-primary"
					/>
				</form>
			</div>
		);
	}
}

export default connect(state => ({
	currentTodo: state.todosState.currentTodo
}))(TodoForm);
