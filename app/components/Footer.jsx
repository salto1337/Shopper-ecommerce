import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { FOOTER_LINKS } from "../constants/footer,";
import instagram_icon from "../../public/instagram_icon.png";
import pintester_icon from "../../public/pintester_icon.png";
import whatsapp_icon from "../../public/whatsapp_icon.png";

export function Footer() {
	return (
		<footer>
			<div className="flex flex-col gap-[30px] lg:items-center">
				<Logo />
				<ul className="flex flex-col lg:flex-row gap-[30px]">
					{FOOTER_LINKS.map((link) => {
						return (
							<li key={link.id}>
								<Link href={link.href}>{link.name}</Link>
							</li>
						);
					})}
				</ul>
				<div className="flex gap-[30px]">
					<Link href="/">
						<Image src={instagram_icon} alt="instagram" />
					</Link>
					<Link href="/">
						<Image src={pintester_icon} alt="pintester" />
					</Link>
					<Link href="/">
						<Image src={whatsapp_icon} alt="whatsapp" />
					</Link>
				</div>
			</div>
			<div className="mt-[30px]">
				<hr />
				<p className="text-center m-[10px]">
					Copyright @2024 - All Right Reserved
				</p>
			</div>
		</footer>
	);
}
