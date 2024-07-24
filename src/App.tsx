import { useEffect, useState } from 'react';
import './App.css';
import UserDetailList from './components/UserDetailList';
import { USER_DETAIL_URL } from './constants/constants';
import { User } from './types/types'; 
import Control from './components/Control';

function App() {
	const [allUsers, setAllUsers] = useState<User[]>(  []   );
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [highlightOldest, setHighlightOldest] = useState<boolean>(false);

	async function fetchUsers() {
		try {
			setLoading(true);
			const response = await fetch(USER_DETAIL_URL);
			const data = await response.json();
			setAllUsers(data.users);
			setFilteredUsers(data.users);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchUsers();
		return () => console.log('cleanup');
	}, []);


	return (
		<main className="w-full h-screen px-10 pb-4 pt-10">
			<Control
				allUsers={allUsers}
				setFilteredUsers={setFilteredUsers}
			/>
			<UserDetailList
				userData={filteredUsers}
				loading={loading}
				highlightOldest={highlightOldest}
			/>
		</main>
	);
}

export default App;