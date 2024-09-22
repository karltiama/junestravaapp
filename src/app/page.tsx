"use client";

import FitnessHero from "@/components/fitness-hero";
import KeyFeatures from "@/components/KeyFeatures";
import Testimonials from "@/components/Testimonials";
import ScreenshotGallery from "@/components/ScreenshotGallery";
export default function Home() {
	return (
		<main className="overflow-hidden">
			<FitnessHero />
			<KeyFeatures />
			<Testimonials />
			<ScreenshotGallery />
		</main>
	);
}
