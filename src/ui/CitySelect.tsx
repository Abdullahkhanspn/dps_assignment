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
		<div className="flex flex-col items-start space-x-2">
			<label htmlFor="city-select" className="font-bold text-gray-900 text-lg pl-2">
				City
			</label>
			<select
				id="city-select"
				onChange={handleFilterCity}
				className="p-2 bg-white rounded-lg border-2 border-gray-900 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
			>
				<option value="">All Cities</option>
				{cities.map((city: string) => (
					<option key={city} value={city}>
						{city}
					</option>
				))}
			</select>
		</div>
	);
};

export default CitySelect;
