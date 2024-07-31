import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function SiteHeader() {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1400px] mx-auto flex items-center sm:px-16 px-4 py-4">
				<Link href="/" className="flex justify-center items-center">
					<Image
						src="/person-running-solid.svg"
						alt="Running Logo"
						width={24}
						height={24}
						className="object-contain"
					/>
				</Link>
				{/* <Button variant="default">Sign in</Button> */}
			</nav>
		</header>
	);
}
