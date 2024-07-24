import React from 'react';
import Search from '../ui/Search';
import { ControlProps } from '../types/types';

const Control: React.FC<ControlProps> = ({
	allUsers,
	setFilteredUsers,
}) => {
	return (
		<header className="my-4">
			<Search allUsers={allUsers} setFilteredUsers={setFilteredUsers} />
		</header>
	);
};

export default Control;