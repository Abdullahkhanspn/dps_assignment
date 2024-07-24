import { UserDetailListProps } from '../types/types';
import React from 'react';
import UserDetail from './UserDetail';


const UserDetailList: React.FC<UserDetailListProps> = ({
	userData,
	loading,
	highlightOldest,
}) => {
	return (
		<section className="h-fit w-full py-6 border-solid border-2 border-black rounded-2xl">
			<article>
				{loading ? (
					<div>Loading...</div>
				) : (
					<UserDetail
						userData={userData}
                        loading={loading}
						highlightOldest={highlightOldest}
					/>
				)}
			</article>
		</section>
	);
};

export default UserDetailList;