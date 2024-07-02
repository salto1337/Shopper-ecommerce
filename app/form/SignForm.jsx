import { useForm } from "react-hook-form";
import { useState } from "react";
import { sign } from "../api/sign";

export function SignForm({ handleLogin }) {
	const [isRegistered, setIsRegister] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		watch,
		setError,
		clearErrors,
	} = useForm();

	const isCheckboxChecked = watch("isCheckboxChecked");

	async function onSubmit(data) {
		try {
			const response = await sign(data);
			setIsRegister(true);
			setTimeout(() => {
				handleLogin();
			}, 3000);
		} catch (e) {
			setError("general", {
				message: "e-mail already exists",
				type: "custom",
			});
			setTimeout(() => {
				clearErrors();
			}, 3000);
		}
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
			{errors.general && (
				<span className="text-red-500 block mb-3">
					{errors.general.message}
				</span>
			)}
			<input
				className="w-full h-[50px] border px-3 mb-3 outline-none"
				type="text"
				placeholder="Your name"
				id="name"
				{...register("name", {
					required: "Input name",
				})}
			/>
			{errors.name && (
				<span className="text-red-500 block mb-3">{errors.name.message}</span>
			)}
			<input
				className="w-full h-[50px] border px-3 mb-4 outline-none"
				type="email"
				placeholder="E-mail"
				id="email"
				{...register("email", {
					required: "Input e-mail",
					validate: (email) => email.includes("@") || "Correct e-mail",
				})}
			/>
			{errors.email && (
				<span className="text-red-500 block mb-3">{errors.email.message}</span>
			)}
			<input
				className="w-full h-[50px] border px-3 mb-4 outline-none"
				type="password"
				placeholder="Password"
				id="password"
				{...register("password", {
					required: "Input your password",
					pattern: {
						value:
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
						message:
							"Password must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
					},
				})}
			/>
			{errors.password && (
				<span className="text-red-500 block mb-3">
					{errors.password.message}
				</span>
			)}
			<button className="bg-red-500 w-full py-4 text-white">Continue</button>
			<p className="mt-4">
				Already have an account?
				<span
					className="text-red-500 font-bold cursor-pointer ml-1"
					onClick={handleLogin}>
					Login here
				</span>
			</p>
			<div>
				<input className="mr-3 mt-4" id="check" type="checkbox" required />
				<label htmlFor="isCheckboxChecked">
					By continuing I agree to the terms of use & privacy policy.
				</label>
				{errors.isCheckboxChecked && (
					<span className="text-red-500 block mb-3">
						{errors.isCheckboxChecked.message}
					</span>
				)}
				{isRegistered && (
					<span className="text-green-500 mt-3 block">Succsessful</span>
				)}
			</div>
		</form>
	);
}
