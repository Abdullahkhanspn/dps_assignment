import React, { useState, useEffect } from 'react';
import { SearchProps } from '../types/types';

const Search: React.FC<SearchProps> = ({ allUsers, setFilteredUsers }) => {
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const filteredUsers = allUsers.filter((user) => {
				const fullName =
					`${user.firstName} ${user.lastName}`.toLowerCase();
				return fullName.includes(searchTerm.toLowerCase());
			});
			console.log(filteredUsers);
			setFilteredUsers(filteredUsers);
		}, 300);

		return () => clearTimeout(timeoutId);
	}, [searchTerm, allUsers, setFilteredUsers]);

	function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchTerm(e.target.value);		
	}

	return (
		<label htmlFor="name-search">
			<p className="text-lg font-bold">Name</p>
			<input
				id="name-search"
				value={searchTerm}
				onChange={handleSearch}
				type="text"
				className="bg-zinc-100 text-black p-2 rounded-lg border-solid border-black border-2"
				placeholder="Search by name"
			/>
		</label>
	);
};

export default Search;
