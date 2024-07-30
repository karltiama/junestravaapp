"use client";

import { Button } from "@/components/ui/button";
import TestStrava from "@/components/text-strava";
import Link from "next/link";
import { FitnessSvg } from "@/components/fitnessSvg";
import { Features } from "@/components/features";

const authorizeUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI}&approval_prompt=force&scope=read,activity:read,activity:read_all`;

export default function Home() {
	return (
		<main className="flex flex-col">
			<div className="flex items-center justify-evenly -mt-10 mb-10 max-w-6xl">
				<div>
					<h1 className="text-4xl">Track your Fitness Stats</h1>
					<Link href={authorizeUrl}>
						<Button>Authorize with Strava</Button>
					</Link>
				</div>
				<div className="w-2/5">
					<FitnessSvg />
				</div>
			</div>
			<div className="mt-auto">
				<Features />
			</div>
		</main>
	);
}
