import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<LoginButton
						title="Click to Login"
					/>
					<br/>
					<LogoutButton
						title="Click to Logout"
					/>
				</div>
			</header>
		</div>
	);
}

export default App;
