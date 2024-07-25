import React from 'react';
import { CitySelectProps } from '../types/types';

const CitySelect: React.FC<CitySelectProps> = ({
	allUsers,
	setFilteredUsers,
}) => {
	const cities = React.useMemo(
		() => Array.from(new Set(allUsers.map((user) => user.address.city))),
		[allUsers]
	);

	function handleFilterCity(e: React.ChangeEvent<HTMLSelectElement>) {
		const selectedCity = e.target.value;
		if (selectedCity === '') {
			setFilteredUsers(allUsers);
		} else {
			setFilteredUsers(
				allUsers.filter((user) => user.address.city === selectedCity)
			);
		}
	}

	return (
		<select
			onChange={handleFilterCity}
			className="p-2.5 mx-4 bg-transparent rounded-lg border-2 border-black"
		>
			<option value="">All Cities</option>
			{cities.map((city: string) => (
				<option key={city} value={city}>
					{city}
				</option>
			))}
		</select>
	);
};

export default CitySelect;
