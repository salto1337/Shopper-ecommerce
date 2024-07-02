import { useContext } from "react";
import { LoginContext } from "../contexts/AuthCartProvider";

export function useLogout() {
	const [loginState, setLoginState] = useContext(LoginContext);

	const logout = () => {
		if (loginState) {
			if (typeof window !== "undefined") {
				localStorage.removeItem("loginState");
			}
			setLoginState(null);
		}
	};

	return { loginState, logout };
}
