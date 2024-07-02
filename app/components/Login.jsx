"use client";

import { useState } from "react";
import { LoginForm } from "../form/LoginForm";
import { SignForm } from "../form/SignForm";

export function Login() {
	const [login, setLogin] = useState(true);

	function handleLogin() {
		setLogin((prevState) => !prevState);
	}

	return (
		<section>
			<div className="bg-bg-hero absolute left-0 h-full w-full z-[-1]"></div>
			<div className="bg-white p-[50px] absolute left-1/2 -translate-x-1/2 lg:top-[200px] shadow-xl max-w-[800px] w-full h-full pt-[100px] lg:h-auto lg:pt-[50px]">
				<h3 className="font-bold text-2xl mb-5">
					{login ? "Login" : "Sign up"}
				</h3>
				{login ? (
					<LoginForm handleLogin={handleLogin} />
				) : (
					<SignForm handleLogin={handleLogin} />
				)}
			</div>
		</section>
	);
}
