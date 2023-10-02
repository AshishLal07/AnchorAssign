import {useContext} from 'react';
import {userContext} from '../userContext';

const Dashboard = () => {
	const {user} = useContext(userContext);
	console.log(user);
	return (
		<div>
			<div className="flex  justify-around mt-5 border-b boder-gray-200">
				<h1 className="text-2xl">Welcome, {user.name}</h1>
				<p className="text-2xl">Your referal links: {user.referal}</p>
			</div>

			<p className="text-center text-xl mt-5">
				LeaderBoard score: {user.score}
			</p>
		</div>
	);
};

export default Dashboard;
