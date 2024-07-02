"use client";

import { useContext } from "react";
import { CartContext } from "../contexts/AuthCartProvider";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { CART_INFO } from "../constants/cart";
import { cartReducer } from "../utils/cartReducer";

export function CartPage() {
	const [cartItems, setCartItems] = useContext(CartContext);

	const cartTotal = cartReducer(cartItems);

	const shippingCost = cartTotal > 500 ? 0 : 10;

	function handleDeleteItem(product) {
		if (product.quantity > 1) {
			const updatedCart = cartItems.map((cartItem) => {
				return cartItem.id === product.id
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem;
			});
			setCartItems(updatedCart);
		} else {
			const filteredCart = cartItems.filter((cartItem) => {
				return cartItem.id !== product.id;
			});
			setCartItems(filteredCart);
		}
	}

	return (
		<section className="mt-[50px]">
			<div className="grid grid-cols-mobile md:grid-cols-cart items-center border-b-2 pb-5">
				{CART_INFO.map((detail) => {
					return (
						<h3
							key={detail}
							className="text-[13px] sm:text-[16px] sm:font-medium">
							{detail}
						</h3>
					);
				})}
			</div>
			<div>
				{cartItems.length === 0 && (
					<p className="mt-2">Your cart is empty...</p>
				)}
				{cartItems.map((product) => {
					return (
						<CartItem
							key={product.id}
							product={product}
							handleDeleteItem={handleDeleteItem}
						/>
					);
				})}
			</div>
			{cartTotal > 0 && (
				<CartSummary cartTotal={cartTotal} shippingCost={shippingCost} />
			)}
		</section>
	);
}
