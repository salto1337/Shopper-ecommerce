import { BACK_END_URL } from "../constants/api";

export async function signToNewsletter(email) {
	try {
		const response = await fetch(`${BACK_END_URL}/newsletter`, {
			method: "POST",
			body: JSON.stringify({ email: email }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.message || "Sign failed");
		}
	} catch (e) {
		throw new Error(e.message);
	}
}
