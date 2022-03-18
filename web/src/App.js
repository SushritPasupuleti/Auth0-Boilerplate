import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div
					style={{
						display: 'flex',
					}}
				>
					<LoginButton
						title="Click to Login"
					/>
				</div>
			</header>
		</div>
	);
}

export default App;
