// CartProvider.js
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [loginState, setLoginState] = useState(() => {
    if (typeof window !== "undefined" && localStorage["loginState"]) {
      return JSON.parse(localStorage["loginState"]);
    }
    return null;
  });

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
        localStorage[`cart_products_${loginState.id}`] = JSON.stringify(updatedCartProducts);
      }
    }
  }

  return (
    <CartContext.Provider value={[cartProducts, addProductToCart]}>
      {children}
    </CartContext.Provider>
  );
}
