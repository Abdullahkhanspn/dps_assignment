export interface User {
	firstName: string;
	lastName: string;
	birthDate: string;
	address: {
		city: string;
	};
}

export interface UserDetailProps {
	userData: User[];
	highlightOldest: boolean;
}

export interface UserDetailListProps {
	userData: User[];
	loading: boolean;
	highlightOldest: boolean;
}