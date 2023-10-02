import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Layout from './Layout.jsx';
import Register from './pages/Registeration';
import Dashboard from './pages/Dashboard';
import {UserContextProvider, userContext} from './userContext';
import {useContext} from 'react';

function App() {
	const {user} = useContext(userContext);
	console.log(user, 'dash');
	return (
		<UserContextProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/" element={<Dashboard />}></Route>
				</Route>
			</Routes>
		</UserContextProvider>
	);
}

export default App;
