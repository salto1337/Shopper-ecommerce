import Image from "next/image";

import logo from "../../public/logo.png";
import Link from "next/link";

export function Logo() {
	return (
		<Link href="/">
			<div className="flex items-center gap-[10px]">
				<Image src={logo} alt="logo" />
				<p className="font-medium text-[20px] md:text-[30px] lg:text-[32px] uppercase">
					shopper
				</p>
			</div>
		</Link>
	);
}
