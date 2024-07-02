"use client";

import { useEffect, useState } from "react";
import {
	useStripe,
	useElements,
	PaymentElement,
} from "@stripe/react-stripe-js";
import { convertToSubcurrency } from "../utils/convertToSubcurrency";
import { Router } from "next/router";

export function CheckoutPage({ amount }) {
	const stripe = useStripe();
	const elements = useElements();

	const [errorMessage, setErrorMessage] = useState();
	const [clientSecret, setClientSecret] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch("/api/create-payment-intent", {
			method: "POST",
			body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [amount]);

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);

		if (!stripe || !elements) {
			return;
		}

		const { error: submitError } = await elements.submit();
		if (submitError) {
			setErrorMessage(submitError.message);
			setLoading(false);
			return;
		}

		const { error } = await stripe.confirmPayment({
			elements,
			clientSecret,
			confirmParams: {
				return_url: `http://localhost:3000/payment-success?amount=${amount}`,
			},
		});

		if (error) {
			setErrorMessage(error.message);
		} else {
		}
		setLoading(false);
	}

	return (
		<form onSubmit={handleSubmit}>
			{clientSecret && <PaymentElement />}
			{errorMessage && <p>{errorMessage}</p>}
			<div className="flex justify-center mt-3">
				<button
					className="text-white bg-black w-full p-5 mt-2 rounded-md font-bold transition-all hover:bg-black/90"
					disabled={!stripe || loading}>
					{!loading ? `Pay ${amount}$` : "Processing..."}
				</button>
			</div>
		</form>
	);
}
