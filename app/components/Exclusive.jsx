import Image from "next/image";
import Link from "next/link";
import exclusive_img from "../../public/exclusive_image.png";

export function Exclusive() {
	return (
		<div className="bg-bg-hero flex flex-col lg:flex-row lg:justify-between p-[50px] mb-[100px]">
			<div className="flex flex-col md:items-center lg:items-start gap-[10px]">
				<h2 className="text-[24px] md:text-[38px] lg:text-[64px] font-medium max-w-[450px]">
					Exclusive Offers For You
				</h2>
				<p className="uppercase mb-3">only on best sellers products</p>
				<Link
					href="/men"
					className="rounded-[40px] bg-red-500 text-white py-2 px-3 w-[200px] text-center transition-all hover:scale-105">
					Check now
				</Link>
			</div>
			<div className="md:flex md:justify-center md:mt-[50px] lg:mt-0">
				<Image src={exclusive_img} alt="women" />
			</div>
		</div>
	);
}
