import React, { useMemo } from 'react';
import { UserDetailListProps } from '../types/types';

const UserDetail: React.FC<UserDetailListProps> = ({
	userData,
	highlightOldest,
}) => {
	const oldestByCity = useMemo(() => {
		const cityMap = new Map<string, Date>();
		userData.forEach((user) => {
			const birthDate = new Date(user.birthDate);
			const city = user.address.city;
			if (!cityMap.has(city) || birthDate < cityMap.get(city)!) {
				cityMap.set(city, birthDate);
			}
		});
		return cityMap;
	}, [userData]);

	return (
		<div className="overflow-x-auto">
			<table className="w-full table-auto">
				<thead>
					<tr className="bg-gray-100 text-left">
						<th className="px-6 py-3 text-lg font-semibold">
							Name
						</th>
						<th className="px-6 py-3 text-lg font-semibold">
							City
						</th>
						<th className="px-6 py-3 text-lg font-semibold">
							Birthday
						</th>
					</tr>
				</thead>
				<tbody>
					{userData.map((user, index) => {
						const isOldest =
							highlightOldest &&
							new Date(user.birthDate).getTime() ===
								oldestByCity.get(user.address.city)?.getTime();
						return (
							<tr
								key={index}
								className={`border-b ${
									isOldest ? 'bg-yellow-100': index % 2 === 0 ? 'bg-white': 'bg-gray-50'
								} hover:bg-gray-100 transition-colors duration-200`}
							>
								<td className="px-6 py-4">
									{user.firstName} {user.lastName}
								</td>
								<td className="px-6 py-4">
									{user.address.city}
								</td>
								<td className="px-6 py-4">{user.birthDate}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default UserDetail;