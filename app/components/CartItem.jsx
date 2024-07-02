import Image from "next/image";
import x_icon from "../../public/cart_cross_icon.png";

export function CartItem({ product, handleDeleteItem }) {
	return (
		<div className="grid grid-cols-mobile md:grid-cols-cart py-4 border-b-2">
			<Image src={product.image} alt={product.name} width={50} height={50} />
			<p className="text-[11px] lg:text-[16px]">{product.name}</p>
			<p>${product.new_price}</p>
			<p>{product.quantity}</p>
			<p>${product.quantity * product.new_price}</p>
			<Image
				className="cursor-pointer"
				src={x_icon}
				alt="delete"
				onClick={() => {
					handleDeleteItem(product);
				}}
			/>
		</div>
	);
}
