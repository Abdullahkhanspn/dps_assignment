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
		<>
			<header className="px-8 text-xl pb-4 font-bold font-sans border-b-2 border-black flex flex-row justify-between items-center gap-4">
				<span>Name</span>
				<span>City</span>
				<span>Birthday</span>
			</header>
			{userData.map((user, index) => {
				const isOldest =
					highlightOldest &&
					new Date(user.birthDate).getTime() ===
						oldestByCity.get(user.address.city)?.getTime();
				return (
					<div
						key={index}
						className={`px-8 py-4 border-b-2 border-black flex flex-row justify-between items-center gap-4 ${
							isOldest ? 'bg-yellow-200' : ''
						}`}
					>
						<p>
							{user.firstName} {user.lastName}
						</p>
						<p>{user.address.city}</p>
						<p>{user.birthDate}</p>
					</div>
				);
			})}
		</>
	);
};

export default UserDetail;