// import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {userContext} from '../userContext';
import {useContext} from 'react';

const Header = () => {
	const {user} = useContext(userContext);
	return (
		<div className="py-4 px-8 border-b">
			<header className=" flex justify-between items-center">
				<Link to={user ? '/' : '/login'} className="flex  ">
					<span className="text-xl font-bold text-red-400">Anchor </span>
				</Link>

				<Link
					to={Object.keys(user).length > 0 ? '/' : '/login'}
					className="flex items-center gap-2 border border-gray-400 rounded-full py-2 px-4 "
				>
					<div className=" rounded-full bg-gray-500 border border-gray-500 text-white overflow-hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 relative top-1"
						>
							<path
								fillRule="evenodd"
								d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<span className="capitalize">{!!user && user.name}</span>
				</Link>
			</header>
		</div>
	);
};

export default Header;
