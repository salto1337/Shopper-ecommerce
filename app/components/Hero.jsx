import Image from "next/image";
import Link from "next/link";

import hero_img from "../../public/hero_image.png";
import hand_img from "../../public/hand_icon.png";
import arrow from "../../public/arrow.png";

export function Hero() {
	return (
		<main className="flex flex-col xl:flex-row xl:justify-between">
			<div className="bg-bg-hero absolute left-0 h-full w-full z-[-1]"></div>
			<div className="flex flex-col gap-[20px] max-w-[600px] pt-[50px] lg:pt-[150px]">
				<p className="uppercase font-medium">new arrivals only</p>
				<h1 className="text-[48px] md:text-[84px] lg:text-[100px] xl:text-[100px] leading-[1.1] font-medium mb-4">
					<span className="flex gap-[10px]">
						new
						<Image src={hand_img} width={70} alt="hand" />
					</span>
					collections for everyone
				</h1>
				<Link
					href="#collection"
					className="flex justify-center items-center gap-[10px] bg-red-500 w-[200px] px-5 py-3 rounded-[40px] text-white transition-all hover:scale-105">
					Latest Collection
					<Image src={arrow} alt="arrow" />
				</Link>
			</div>
			<div>
				<Image className="w-[450px]" src={hero_img} alt="women" />
			</div>
		</main>
	);
}
