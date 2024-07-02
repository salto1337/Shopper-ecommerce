"use client";

import { useState } from "react";
import { signToNewsletter } from "../api/signToNewsletter";

export function Newsletter() {
	const [email, setEmail] = useState("");
	const [success, SetSuccess] = useState(false);
	const [error, setError] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const data = await signToNewsletter(email);
			SetSuccess(true);
		} catch (e) {
			setError(e.message);
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	}

	return (
		<div className="bg-bg-hero p-[50px] flex flex-col items-center gap-[30px] mt-[100px] mb-[100px]">
			<h2 className=" text-[24px] md:text-[38px] lg:text-[48px] font-medium">
				Get Exclusive Offer On Your Email
			</h2>
			<p>Subscribe to our newsletter and stay updated</p>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="flex border justify-between lg:w-[730px] lg:h-[60px] rounded-[80px] relative">
					<input
						className="md:w-[300px] lg:w-[500px] ml-[30px] outline-none"
						type="email"
						placeholder="Your email id"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button
						className={`w-[100px] md:w-[150px] lg:w-[210px] h-[60px] rounded-[80px] bg-black text-white ${
							success || error ? "cursor-not-allowed" : ""
						}`}
						disabled={success || error ? true : false}>
						Subscribe
					</button>
					{success && (
						<p className="absolute left-[30px] bottom-[-30px] text-green-500">
							Success
						</p>
					)}
					{error && (
						<p className="absolute left-[30px] bottom-[-30px] text-red-500">
							{error}
						</p>
					)}
				</div>
			</form>
		</div>
	);
}
