import React from 'react';
import Search from '../ui/Search';
import { ControlProps } from '../types/types';
import CitySelect from '../ui/CitySelect';

const Control: React.FC<ControlProps> = ({
	allUsers,
	setFilteredUsers,
	highlightOldest,
	setHighlightOldest,
}) => {
	return (
		<header className="my-4 flex flex-row gap-4 items-center">
			<Search allUsers={allUsers} setFilteredUsers={setFilteredUsers} />
			<CitySelect
				allUsers={allUsers}
				setFilteredUsers={setFilteredUsers}
			/>
			<div className="flex gap-4 text-xl items-center mt-6">
				<span>Highlight oldest person per city</span>
				<input
					type="checkbox"
					className="size-5"
					checked={highlightOldest}
					onChange={(e) => setHighlightOldest(e.target.checked)}
				/>
			</div>
		</header>

	);
};

export default Control;