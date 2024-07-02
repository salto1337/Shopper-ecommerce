"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { convertToSubcurrency } from "../utils/convertToSubcurrency";
import { CheckoutPage } from "./CheckoutPage";
import { useContext } from "react";
import { CartContext, LoginContext } from "../contexts/AuthCartProvider";
import { cartReducer } from "../utils/cartReducer";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
	throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export function Payment() {
	const [cartItems] = useContext(CartContext);
	const [user] = useContext(LoginContext);
	const amount = cartReducer(cartItems) || 1;

	const username = user ? user.username : "user";

	return (
		<div className="py-[100px] flex flex-col items-center">
			<div className="mb-10">
				<h1 className="text-4xl font-extrabold mb-2">{username}</h1>
				<h2 className="text-2xl">
					has requested
					<span className="font-bold"> ${amount}</span>
				</h2>
			</div>
			<div className="w-[350px] md:w-[500px]">
				<Elements
					stripe={stripePromise}
					options={{
						mode: "payment",
						amount: convertToSubcurrency(amount),
						currency: "usd",
					}}>
					<CheckoutPage amount={amount} />
				</Elements>
			</div>
		</div>
	);
}
