"use client";

import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { BACK_END_URL } from "../constants/api";

export function WomenPopular() {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(`${BACK_END_URL}/data-product`);
				const res = await data.json();
				setData(res);
				setIsLoading(false);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchData();
	}, []);

	if (error) return <p>Error: {error}</p>;

	return (
		<div className="mb-[150px]">
			<h2 className=" text-[24px] md:text-[28px] lg:text-[32px] font-mediums uppercase text-center mb-[50px]">
				popular in women
			</h2>
			<div className="flex flex-col items-center gap-[15px] lg:flex-row md:gap-[40px] lg:gap-[15px]">
				{isLoading ? (
					<p>Loading...</p>
				) : (
					data.map((item) => <ProductItem key={item.id} item={item} />)
				)}
			</div>
		</div>
	);
}
