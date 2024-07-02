"use client";

import { ProductItem } from "./ProductItem";
import { useEffect, useState } from "react";
import { BACK_END_URL } from "../constants/api";

export function Collections() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchedData = async () => {
			try {
				const data = await fetch(`${BACK_END_URL}/collections`);
				const res = await data.json();
				setData(res);
				setIsLoading(false);
			} catch (e) {
				setError(e.message);
			}
		};
		fetchedData();
	}, []);

	if (error) return <p>Error: {error}</p>;

	return (
		<section id="collection">
			<h2 className="uppercase text-center text-[24px] lg:text-[32px] mb-[50px]">
				new collections
			</h2>
			<div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-4 gap-[30px] md:gap-[40px] lg:gap-[30px]">
				{isLoading ? (
					<p>Loading...</p>
				) : (
					data.map((item) => <ProductItem key={item.id} item={item} />)
				)}
			</div>
		</section>
	);
}
