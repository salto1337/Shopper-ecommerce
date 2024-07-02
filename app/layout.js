import "./globals.css";
import { CenteredContent } from "./components/CenteredContent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AuthCartProvider } from "./contexts/AuthCartProvider";

export const metadata = {
	title: "Shopper",
	description: "Shopper is a place where you can buy close for everyone",
	icons: {
		icon: "favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<AuthCartProvider>
					<CenteredContent>
						<Header />
						{children}
						<Footer />
					</CenteredContent>
				</AuthCartProvider>
			</body>
		</html>
	);
}
