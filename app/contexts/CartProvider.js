import { useEffect, useState } from "react";
import { CartContext } from "./contexts/CartContext";

export function CartProvider({ children, loginState }) {
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
		<CartContext.Provider value={[cartProducts, addProductToCart]}>
			{children}
		</CartContext.Provider>
	);
}
