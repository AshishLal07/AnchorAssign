import axios from 'axios';
import {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {userContext} from '../userContext.jsx';
const LoginPage = () => {
	const [login, setLogin] = useState({email: '', password: ''});
	const {setUser} = useContext(userContext);
	const Navigate = useNavigate();

	const setValue = (e) => {
		setLogin({...login, [e.target.name]: e.target.value});
	};

	const hasJWT = (user) => {
		localStorage.setItem('userId', user._id);
	};

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const validUser = await axios.post('http://localhost:3100/login', {
				...login,
			});
			console.log(validUser);
			if (validUser) {
				hasJWT(validUser.data.validUser);
				setUser(validUser.data.validUser);
				Navigate('/');
			}
		} catch (err) {
			console.log(err);
			alert('if Not a user SignUp to be member');
		}
	};
	return (
		<div className="mt-4 grow flex items-center justify-around ">
			<div className="mb-64 bg-gray-100 p-6 rounded">
				<h1 className="text-center text-4xl mb-4 ">Login</h1>
				<form
					className="max-w-md flex flex-col  gap-10 m-auto"
					onSubmit={handleSubmit}
				>
					<input
						name="email"
						type="email"
						placeholder="your@email.com"
						value={login.email}
						onChange={setValue}
						className="p-2"
					/>
					<input
						name="password"
						type="password"
						placeholder="Password"
						value={login.password}
						onChange={setValue}
						className="p-2"
					/>
					<button className="bg-red-300 w-full rounded-2xl p-2 text-white">
						Login
					</button>
					<div className="pt-2 text-center text-gray-500">
						Don&apos;t have account yet?{' '}
						<Link className="text-black underline" to={'/register'}>
							{' '}
							Register Now
						</Link>{' '}
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
