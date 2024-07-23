import React from 'react';

const Search = () => {
	return (
		<label htmlFor="name-search">
			<p className="text-lg font-bold">Name</p>
			<input
				id="name-search"
				type="text"
				className="bg-zinc-100 text-black p-2 rounded-lg border-solid border-black border-2"
				placeholder="Search by name"
			/>
		</label>
	);
};

export default Search;
