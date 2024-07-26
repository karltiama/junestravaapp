import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-pt-[3.5rem]">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.variable
				)}>
				<div className="relative flex min-h-dvh flex-col bg-background">
					<SiteHeader />
					<main className="flex-1">{children}</main>
					<footer></footer>
				</div>
			</body>
		</html>
	);
}
