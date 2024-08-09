"use client";

import { Button } from "@/components/ui/button";
import TestStrava from "@/components/text-strava";
import Link from "next/link";
import { FitnessSvg } from "@/components/fitnessSvg";
import { Features } from "@/components/features";
import FitnessHero from "@/components/fitness-hero";
import HeroComponent from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<FitnessHero />
			{/* <HeroComponent /> */}
			<KeyFeatures />
		</main>
	);
}
