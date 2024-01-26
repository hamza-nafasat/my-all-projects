export type OrderItemType = {
	name: string;
	photo: string;
	price: number;
	quantity: number;
	_id: string;
};
export type OrderType = {
	name: string;
	address: string;
	city: string;
	country: string;
	state: string;
	pinCode: number;
	status: "Processing" | "Shipped" | "Delivered";
	subtotal: number;
	discount: number;
	shippingCharges: number;
	tax: number;
	total: number;
	orderItems: OrderItemType[];
	_id: string;
};
export const orderItemData: OrderItemType[] = [
	{
		_id: "orderItem",
		name: "Puma Shows",
		photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804",
		price: 5000,
		quantity: 2,
	},
];
export const orderData: OrderType = {
	name: "Hamza Nafasat",
	address: "Miani chechian",
	city: "Gujrat",
	state: "Punjab",
	country: "Pakistan",
	pinCode: 50700,
	status: "Processing",
	subtotal: 4000,
	discount: 1200,
	shippingCharges: 0,
	tax: 200,
	total: 4000 + 200 + 0 - 1200,
	orderItems: orderItemData,
	_id: "orderItemId",
};
