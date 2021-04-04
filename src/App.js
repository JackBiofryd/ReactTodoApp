import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import TodoForm from './components/todos/TodoForm';
import Todos from './components/todos/Todos';
import Settings from './components/settings/Settings';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<div className="card main-card">
					<div className="card-left">
						<div className="card-header">
							<h1>What's on your mind?</h1>
						</div>
						<div className="card-body">
							<TodoForm />
							<Todos />
						</div>
					</div>
					<div className="card-right">
						<Settings />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
