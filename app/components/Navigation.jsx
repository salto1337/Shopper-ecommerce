"use client";

import { NAV_LINKS } from "../constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLogout } from "../hooks/useLogout";

export function Navigation({ isMenuShown, setIsMenuShown }) {
	const path = usePathname();
	const { loginState, logout } = useLogout();

	return (
		<nav>
			<ul
				className={`lg:flex gap-[30px] ${
					isMenuShown
						? "fixed flex flex-col items-center pt-[100px] bg-white w-full h-full left-0 top-0 z-10 lg:static lg:flex-row lg:pt-0"
						: "hidden lg:flex"
				}`}>
				{NAV_LINKS.map((link) => {
					const activePath =
						path === link.href ||
						(link.href !== "/" && path.startsWith(link.href));
					return (
						<li
							key={link.id}
							className="transition-all ease-in-out duration-100 hover:scale-105">
							<Link
								href={link.href}
								className={`${
									activePath ? "border-b-2 border-red-500 py-1" : ""
								}`}
								onClick={setIsMenuShown}>
								{link.name}
							</Link>
						</li>
					);
				})}
				<li>
					<Link
						onClick={() => {
							setIsMenuShown();
							logout();
						}}
						className="lg:hidden"
						href="/login">
						{loginState ? "Logout" : "Login"}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
