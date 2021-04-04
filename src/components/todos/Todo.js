import React, { Component } from 'react';
import {
	toggleCompleted,
	deleteTodo,
	setCurrentTodo
} from '../../actions/todosActions';
import store from '../../store';

export default class Todo extends Component {
	onCompletedClick = () => store.dispatch(toggleCompleted(this.props.id));

	onDeleteClick = () => store.dispatch(deleteTodo(this.props.id));

	onEditClick = () => {
		const { id, text, completed } = this.props;

		const todoForEdit = {
			id,
			text,
			completed
		};

		store.dispatch(setCurrentTodo(todoForEdit));
	};

	render() {
		const { text, completed } = this.props;

		return (
			<div className="todo-field">
				<i
					onClick={this.onCompletedClick}
					className={
						completed
							? 'fas fa-check-circle checkbox'
							: 'far fa-check-circle checkbox'
					}
				/>
				<h2 className="todo-text">{text}</h2>
				<i
					onClick={this.onEditClick}
					className="fas fa-pen todo-edit"
				/>
				<i
					onClick={this.onDeleteClick}
					className="fas fa-minus-circle todo-delete"
				/>
			</div>
		);
	}
}
