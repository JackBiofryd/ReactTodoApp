import React from 'react';
import TodoInfo from './TodoInfo';
import TodoModifiers from './TodoModifiers';
import TodoFilters from './TodoFilters';

export default function Settings() {
	return (
		<div className="settings-container">
			<TodoInfo />
			<TodoModifiers />
			<TodoFilters />
		</div>
	);
}
