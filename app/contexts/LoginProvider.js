import { useState } from "react";
import { LoginContext } from "./contexts/LoginContext";

export function LoginProvider({ children }) {
	const [loginState, setLoginState] = useState(() => {
		if (typeof window !== "undefined" && localStorage["loginState"]) {
			return JSON.parse(localStorage["loginState"]);
		}
		return null;
	});

	return (
		<LoginContext.Provider value={[loginState, setLoginState]}>
			{children}
		</LoginContext.Provider>
	);
}
