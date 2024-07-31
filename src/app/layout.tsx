import type { Metadata } from "next";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
	title: "Strava Fitness Stats",
	description: "Ftiness Stats from Strava",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="relative">
				<SiteHeader />
				{children}
				<footer></footer>
			</body>
		</html>
	);
}
