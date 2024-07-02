"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductItem } from "./ProductItem";
import { ExploreButton } from "./ExploreButton";

export function Subpage({ data, banner }) {
	const dataHalfLength = data.length / 2;
	const filteredData = data.slice(dataHalfLength);

	const [products, setProducts] = useState(filteredData);
	const buttonName = products === data ? "Show less" : "Explore more";

	function handleExplore() {
		if (products !== data) {
			setProducts(data);
		} else {
			setProducts(filteredData);
		}
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<section className="mb-[100px]">
			<div>
				<Image src={banner} alt="banner" />
			</div>
			<div className="mt-5 mb-5">
				<p>
					<span className="font-medium">Showing 1 - {products.length} </span>
					out of {data.length} products
				</p>
			</div>
			<div className="flex flex-col items-center lg:grid lg:grid-cols-4 gap-[50px]">
				{products.map((product) => {
					return <ProductItem key={product.id} item={product} />;
				})}
			</div>
			<div className="flex justify-center mt-[50px]">
				<ExploreButton handleExplore={handleExplore}>
					{buttonName}
				</ExploreButton>
			</div>
		</section>
	);
}
