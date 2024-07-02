import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../contexts/AuthCartProvider";
import cart from "../../public/cart_icon.png";

export function Cart() {
	const [cartItems] = useContext(CartContext);

	const productsNumber = cartItems.reduce((accumulator, cartItem) => {
		return accumulator + cartItem.quantity;
	}, 0);

	return (
		<Link href="/cart">
			<div className="relative">
				<Image src={cart} alt="cart" width={35} height={35} />
				<span className="absolute top-0 left-[30px] text-s bg-red-500 text-white w-[19px] h-[19px] flex justify-center items-center rounded-[50%]">
					{productsNumber}
				</span>
			</div>
		</Link>
	);
}
