export function cartReducer(items) {
	return items.reduce((acc, cartItem) => {
		return acc + cartItem.quantity * cartItem.new_price;
	}, 0);
}
