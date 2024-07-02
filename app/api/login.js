import { BACK_END_URL } from "../constants/api";

export async function login(user) {
	try {
		const response = await fetch(`${BACK_END_URL}/login`, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const res = await response.json();
		if (!response.ok) {
			throw new Error(res.message || "Login failed");
		}
		return res;
	} catch (e) {
		throw new Error(e.message);
	}
}
