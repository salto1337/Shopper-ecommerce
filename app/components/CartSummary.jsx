import Link from "next/link";

export function CartSummary({ cartTotal, shippingCost }) {
	return (
		<div className="flex justify-between items-center mt-[50px]">
			<div className=" w-[100vw] xl:w-[30vw]">
				<h3 className="font-medium text-3xl mb-[30px]">Cart Totals</h3>
				<div>
					<div className="flex justify-between py-2 border-b-2">
						<p>Subtotal</p>
						<p>${cartTotal}</p>
					</div>
					<div className="flex justify-between py-2 border-b-2">
						<p>Shipping Fee</p>
						<p>${shippingCost}</p>
					</div>
					<div className="flex justify-between py-2">
						<p className="font-bold text-xl">Total</p>
						<p className="font-bold">${cartTotal + shippingCost}</p>
					</div>
				</div>
				<Link
					href="/payment"
					className="w-[200px] p-2 bg-red-500 text-white mt-[30px] uppercase text-[14px] font-bold transition-all">
					proceed to checkout
				</Link>
			</div>
		</div>
	);
}
