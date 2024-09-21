import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function SiteHeader() {
	return (
		<header className="w-full bg-slate-500 z-10">
			<nav className="max-w-[1400px] mx-auto flex items-center justify-between sm:px-16 px-4 py-4">
				<div className="flex items-center">
					<Link href="/" className="flex justify-center items-center mr-4">
						<Image
							src="/person-running-solid.svg"
							alt="Running Logo"
							width={24}
							height={24}
							className="object-contain"
						/>
					</Link>
					<h1 className="text-2xl font-bold text-white">Enduro Stats</h1>
				</div>
				{/* <Button variant="default">Sign in</Button> */}
			</nav>
		</header>
	);
}
