"use client";

import { useState } from "react";
import { BurgerButton } from "./BurgerButton";
import { Cart } from "./Cart";
import { LoginBtn } from "./LoginBtn";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
	const [isMenuShown, setIsMenuShown] = useState(false);

	function toggleMenu() {
		setIsMenuShown((prevState) => !prevState);
	}

	return (
		<header className="flex items-center justify-between pb-2">
			<Logo />
			<Navigation isMenuShown={isMenuShown} setIsMenuShown={toggleMenu} />
			<div className="hidden lg:flex items-center gap-[40px]">
				<LoginBtn />
				<Cart />
			</div>
			<div className="flex gap-[30px] lg:hidden">
				<Cart />
				<BurgerButton isMenuShown={isMenuShown} setIsMenuShown={toggleMenu} />
			</div>
		</header>
	);
}
