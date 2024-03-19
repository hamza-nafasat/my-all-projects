export interface User {
	name: string;
	email: string;
	gender: string;
	_id: string;
	dob: string;
	photo: string;
	role?: string;
}

export interface ProductTypes {
	_id: string;
	name: string;
	category: string;
	price: number;
	stock: number;
	photo: {
		publicId: string;
		url: string;
	};
	createdAt: string;
	updatedAt: string;
}
