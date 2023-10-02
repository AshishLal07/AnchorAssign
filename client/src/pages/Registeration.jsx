import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [referal, setReferal] = useState('');
	const Navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		const data = {name, email, password};

		let newUser = {};
		if (referal === '') {
			newUser = await axios.post('http://localhost:3100/register', data);
		} else {
			console.log(data);
			newUser = await axios.post(
				`http://localhost:3100/register/${referal}`,
				data
			);
		}
		if (Object.keys(newUser).length > 0) {
			Navigate('/login');
		}
	}

	return (
		<>
			<div className="mt-4 grow flex items-center justify-around ">
				<div className=" bg-gray-100 p-6 rounded">
					<h1 className="text-center text-4xl mb-4">Register</h1>
					<form
						className="max-w-md m-auto flex flex-col gap-10"
						onSubmit={handleSubmit}
					>
						<input
							type="text"
							placeholder="Enter your name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="p-2"
						></input>
						<input
							type="email"
							placeholder="your@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="p-2"
						/>
						<input
							type="text"
							placeholder="referal"
							value={referal}
							onChange={(e) => setReferal(e.target.value)}
							className="p-2"
						/>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="p-2"
						/>
						<button className="bg-red-300 w-full rounded-2xl p-2 text-white;">
							Register
						</button>
						<div className="pt-2 text-center text-gray-500">
							Already a member?{' '}
							<Link className="text-black underline" to={'/login'}>
								{' '}
								Login here
							</Link>{' '}
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
