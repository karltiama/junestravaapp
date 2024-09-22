import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ChartColumn, LayoutDashboard } from "lucide-react";

export default function Component() {
	return (
		<div className="min-h-screen">
			<main className="container mx-auto p-6">
				<div className="flex flex-col items-center lg:flex-row lg:justify-between">
					<div className="max-w-lg space-y-6 flex-grow">
						<h1 className="text-4xl font-bold text-gray-900">
							It’s Time to Regain Your Fitness
						</h1>
						<p className="text-lg text-gray-600">
							Do fitness anywhere and anytime with our training videos
						</p>
						<Button className="px-6 py-3 text-lg rounded-lg">
							Try It For Free
						</Button>
					</div>
					<div className="mt-12 lg:mt-0 flex-grow">
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3">
					<div className="flex items-start space-x-4">
						<LayoutDashboard className="w-12 h-12" />
						<div>
							<h3 className="text-xl font-semibold">
								Personalized Activity Dashboard
							</h3>
							<p className="text-gray-600">
								Get personalized workouts on a daily basis from professionals.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-4">
						<ChartColumn className="w-12 h-12 " />
						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								Comprehensive Workout Analysis
							</h3>
							<p className="text-gray-600">
								Use all the benefits of the service anywhere and on any device.
							</p>
						</div>
					</div>
					<div className="flex items-start space-x-4">
						<CalendarCheck className="w-12 h-12 " />
						<div>
							<h3 className="text-xl font-semibold text-gray-900">
								Interactive Goal Setting and Progress Tracking
							</h3>
							<p className="text-gray-600">
								A private community where we help each other.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
