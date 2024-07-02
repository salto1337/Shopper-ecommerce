import { BACK_END_URL } from "../constants/api";

export async function productDetailsData(category, id) {
	try {
		const data = await fetch(`${BACK_END_URL}/${category}/${id}`);
		const res = await data.json();
		return res;
	} catch (error) {
		throw new Error(e.message);
	}
}
