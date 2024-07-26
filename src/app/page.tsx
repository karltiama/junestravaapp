"use client ";

import { Button } from "@/components/ui/button";

import TestStrava from "@/components/text-strava";
import Link from "next/link";
import MySVGIcon from "@/components/fitness";
import { FitnessSvg } from "@/components/fitnessSvg";

const authorizeUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI}&approval_prompt=force&scope=read,activity:read,activity:read_all`;

export default function Home() {
	return (
		<main className="flex min-h-screen items-center justify-evenly p-16">
			<Link href={authorizeUrl}>
				<Button>Authorize with Strava</Button>
			</Link>
			<div className="w-2/5">
				<FitnessSvg />
			</div>

			{/* <TestStrava /> */}
		</main>
	);
}
