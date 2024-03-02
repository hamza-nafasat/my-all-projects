export interface UserSchemaTypes {
	_id: string;
	name: string;
	email: string;
	dob: Date;
	photo: string;
	gender: "male" | "female";
	role: "admin" | "user";
	createdAt?: Date;
	updatedAt?: Date;
	age: Date;
}

export interface ProductSchemaTypes {
	name: string;
	price: number;
	stock: number;
	photo: string;
	category: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface OrderSchemaTypes {
	user: string;
	subTotal: number;
	tax: number;
	shippingCharges: number;
	discount: number;
	total: number;
	status: string;
	shippingInfo: {
		address: string;
		city: string;
		state: string;
		country: string;
		pinCode: number;
	};
	orderItem: [
		{
			name: string;
			photo: string;
			price: number;
			Quantity: number;
			productId: string;
		}
	];
}
