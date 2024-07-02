import { useForm } from "react-hook-form";
import { useContext } from "react";
import { LoginContext } from "../contexts/AuthCartProvider";
import { login } from "../api/login";
import { useRouter } from "next/navigation";

export function LoginForm({ handleLogin }) {
	const [_, setLoginState] = useContext(LoginContext);

	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		setError,
		clearErrors,
	} = useForm();

	async function onSubmit(data) {
		try {
			const response = await login(data);
			setLoginState(response.user);
			if (typeof window !== "undefined") {
				localStorage.setItem("loginState", JSON.stringify(response.user));
			}

			router.push("/");
		} catch (e) {
			setError("general", {
				message: "Invalid e-mail or password",
				type: "custom",
			});
			setTimeout(() => {
				clearErrors();
			}, 3000);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
			{errors.general && (
				<span className="text-red-500 block mb-3">
					{errors.general.message}
				</span>
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
				<span className="text-red-500 block mb-4">
					{errors.password.message}
				</span>
			)}
			<button className="bg-red-500 w-full py-4 text-white">Continue</button>
			<p className="mt-4">
				Create an account
				<span
					className="text-red-500 font-bold cursor-pointer ml-1"
					onClick={handleLogin}>
					Click Here
				</span>
				{isSubmitSuccessful && <span className="text-green-500"></span>}
			</p>
		</form>
	);
}
