import { BACK_END_URL } from "../constants/api";

export async function sign(user) {
	try {
		const response = await fetch(`${BACK_END_URL}/register`, {
			method: "POST",
			body: JSON.stringify(user),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();  
		if (!response.ok) {  
			throw new Error(data.message || "Register failed");
		}
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}
