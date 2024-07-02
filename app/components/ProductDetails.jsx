"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/AuthCartProvider";
import { SizeButton } from "./SizeButton";
import { LoginContext } from "../contexts/AuthCartProvider";
import { ADULT_SIZES } from "../constants/sizes";
import { KIDS_SIZES } from "../constants/sizes";
import arrow from "../../public/breadcrum_arrow.png";
import { generateStars } from "../utils/generateStars";

export function ProductDetails({ data }) {
	const [sizeSelected, setSizeSelected] = useState(null);
	const [cartproducts, addProductToCart] = useContext(CartContext);
	const [loginState] = useContext(LoginContext);
	const [isProductAdded, setIsProductAddes] = useState(false);
	const router = useRouter();

	const product = data;
	const sizeOptions = product.category !== "kid" ? ADULT_SIZES : KIDS_SIZES;

	function handleAddToCart() {
		if (loginState) {
			const existingproduct = cartproducts.find(
				(cartproduct) => cartproduct.id === product.id
			);

			if (existingproduct) {
				const updatedCart = cartproducts.map((cartproduct) => {
					return cartproduct.id === product.id
						? { ...cartproduct, quantity: cartproduct.quantity + 1 }
						: cartproduct;
				});
				addProductToCart(updatedCart);
			} else {
				addProductToCart([...cartproducts, { ...product, quantity: 1 }]);
			}
		} else {
			router.push("/login");
		}
		setIsProductAddes(true);
		setTimeout(() => setIsProductAddes(false), 2000);
	}

	return (
		<section>
			<div className="flex gap-[5px] text-[14px] mt-[15px] mb-[15px]">
				<Link href="/">SHOP</Link>
				<Image
					className="ml-2 mr-2 w-[20px] h-[20px] lg:h-auto lg:w-auto"
					src={arrow}
					alt="arrow"
				/>
				<Link className="uppercase" href={`/${product.category}`}>
					{product.category}
				</Link>
				<Image
					className="ml-2 mr-2 w-[20px] h-[20px] lg:h-auto lg:w-auto"
					src={arrow}
					alt="arrow"
				/>
				<Link className="uppercase font-bold" href="">
					{product.name}
				</Link>
			</div>
			<div className="flex flex-col lg:flex-row gap-[30px] mt-[50px]">
				<div className="flex gap-[10px] md:w-[100vw] xl:w-[60vw]">
					<div className="flex flex-col gap-[10px]">
						{Array(4)
							.fill()
							.map((_, index) => {
								return (
									<Image
										key={index}
										src={product.image}
										alt={product.name}
										width={100}
										height={50}
									/>
								);
							})}
					</div>
					<div>
						<Image
							className="h-[100%] xl:h-auto"
							src={product.image}
							alt={product.name}
							width={425}
							height={200}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-[20px]">
					<h3 className="font-medium text-4xl">{product.name}</h3>
					<div className="flex gap-[3px]">
						{generateStars(product.stars)}
						<p className="text-gray-500 text-xs">({data.reviews})</p>
					</div>
					<p className="flex gap-[10px]">
						<span className="line-through text-gray-500">
							${product.old_price}
						</span>
						<span className="font-medium text-red-600">
							${product.new_price}
						</span>
					</p>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
						suscipit nesciunt sed a in rerum. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Illum suscipit nesciunt sed a in
						rerum.
					</p>
					<div>
						<p className="font-medium mb-3">Select Size</p>
						<div>
							{sizeOptions.map((size) => {
								return (
									<SizeButton
										key={size}
										size={size}
										sizeSelected={sizeSelected}
										setSizeSelected={setSizeSelected}
									/>
								);
							})}
						</div>
					</div>
					<button
						className={`uppercase py-2 px-4 w-[150px]  text-white ${
							sizeSelected
								? "cursor-pointer transition-all bg-red-500 lg:hover:scale-105"
								: "cursor-not-allowed bg-gray-200"
						}`}
						disabled={!sizeSelected}
						onClick={handleAddToCart}>
						add to cart
					</button>
					{isProductAdded && <p className="text-green-500">Product added</p>}
					<p>
						<span className="font-medium">Category: </span>
						{product.category}, {product.type}
					</p>
					<p>
						<span className="font-medium">Tags: </span>
						{product.tags}
					</p>
				</div>
			</div>
		</section>
	);
}
