import { BACK_END_URL } from "../constants/api";

export async function productsData(category) {
	try {
		const data = await fetch(`${BACK_END_URL}/${category}`);
		const res = await data.json();
		return res;
	} catch (e) {
		throw new Error(e.message);
	}
}
