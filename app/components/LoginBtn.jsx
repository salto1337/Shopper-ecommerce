import Link from "next/link";
import { useLogout } from "../hooks/useLogout";

export function LoginBtn() {
	const { loginState, logout } = useLogout();

	return (
		<Link
			href={loginState ? "" : "/login"}
			className="bg-white border border-black px-[40px] py-[10px] rounded-[40px] transition-all hover:bg-red-100"
			onClick={logout}>
			{loginState ? "Logout" : "Login"}
		</Link>
	);
}
