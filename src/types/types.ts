export interface User {
	firstName: string;
	lastName: string;
	birthDate: string;
	address: {
		city: string;
	};
}

export interface ControlProps {
	allUsers: User[];
	setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
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

export interface SearchProps {
	allUsers: User[];
	setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export interface CitySelectProps {
	allUsers: User[];
	setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
}