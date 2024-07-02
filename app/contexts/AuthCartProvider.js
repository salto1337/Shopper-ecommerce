"use client";

import { useEffect, useState, createContext } from "react";

export const LoginContext = createContext();
export const CartContext = createContext();

export function AuthCartProvider({ children }) {
	const [loginState, setLoginState] = useState(() => {
		if (typeof window !== "undefined" && localStorage["loginState"]) {
			return JSON.parse(localStorage["loginState"]);
		}
		return null;
	});

	const [cartProducts, setCartProducts] = useState([]);

	useEffect(() => {
		if (loginState) {
			const storedCartProducts =
				typeof window !== "undefined"
					? localStorage[`cart_products_${loginState.id}`]
					: null;
			if (storedCartProducts) {
				setCartProducts(JSON.parse(storedCartProducts));
			} else {
				setCartProducts([]);
			}
		} else {
			setCartProducts([]);
		}
	}, [loginState]);

	function addProductToCart(updatedCartProducts) {
		if (loginState) {
			setCartProducts(updatedCartProducts);
			if (typeof window !== "undefined") {
				localStorage[`cart_products_${loginState.id}`] =
					JSON.stringify(updatedCartProducts);
			}
		}
	}

	return (
		<LoginContext.Provider value={[loginState, setLoginState]}>
			<CartContext.Provider value={[cartProducts, addProductToCart]}>
				{children}
			</CartContext.Provider>
		</LoginContext.Provider>
	);
}