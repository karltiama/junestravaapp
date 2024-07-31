"use client";

import { Button } from "@/components/ui/button";
import TestStrava from "@/components/text-strava";
import Link from "next/link";
import { FitnessSvg } from "@/components/fitnessSvg";
import { Features } from "@/components/features";
import FitnessHero from "@/components/fitness-hero";

const authorizeUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI}&approval_prompt=force&scope=read,activity:read,activity:read_all`;

export default function Home() {
	return (
		<main className="overflow-hidden">
			<FitnessHero />
		</main>
	);
}
