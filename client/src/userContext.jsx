import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const userContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
	const [user, setUser] = useState({});
	const [render, setRender] = useState(false);

	useEffect(() => {
		if (Object.keys(user).length <= 0) {
			axios
				.get(`http://localhost:3100/profile/${localStorage.getItem('userId')}`)
				.then((data) => {
					setUser(data.data);
					setRender(true);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<userContext.Provider value={{user, setUser, render}}>
			{children}
		</userContext.Provider>
	);
}
