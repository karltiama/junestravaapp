import { Apple, Dumbbell, HeartPulse } from "lucide-react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T9kJxef2G3I
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
				<div className="space-y-6">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
							Fitness Features
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Elevate Your Fitness with Our Platform
						</h2>
						<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Discover the innovative fitness features that empower you to
							achieve your performance goals.
						</p>
					</div>
					<div className="grid gap-6">
						<div className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<HeartPulse className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-lg font-medium">Real-Time Tracking</h3>
								<p className="text-muted-foreground">
									Monitor your fitness metrics in real-time and track your
									progress.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<Dumbbell className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-lg font-medium">Personalized Workouts</h3>
								<p className="text-muted-foreground">
									Get custom workout plans tailored to your fitness level and
									goals.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<Apple className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-lg font-medium">Nutrition Guidance</h3>
								<p className="text-muted-foreground">
									Receive personalized nutrition recommendations to support your
									fitness journey.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-6">
					<div className="grid grid-cols-2 gap-4">
						<div className="rounded-lg border bg-background p-4 shadow-sm">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<TimerIcon className="h-6 w-6" />
							</div>
							<h4 className="mt-4 text-lg font-medium">Performance Tracking</h4>
							<p className="mt-2 text-muted-foreground">
								Analyze your fitness progress with detailed performance metrics.
							</p>
						</div>
						<div className="rounded-lg border bg-background p-4 shadow-sm">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<PodcastIcon className="h-6 w-6" />
							</div>
							<h4 className="mt-4 text-lg font-medium">Goal-Setting</h4>
							<p className="mt-2 text-muted-foreground">
								Set and track your fitness goals to stay motivated and
								accountable.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="rounded-lg border bg-background p-4 shadow-sm">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<NutIcon className="h-6 w-6" />
							</div>
							<h4 className="mt-4 text-lg font-medium">Nutrition Planning</h4>
							<p className="mt-2 text-muted-foreground">
								Get personalized nutrition plans to fuel your fitness
								performance.
							</p>
						</div>
						<div className="rounded-lg border bg-background p-4 shadow-sm">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<GroupIcon className="h-6 w-6" />
							</div>
							<h4 className="mt-4 text-lg font-medium">Community Support</h4>
							<p className="mt-2 text-muted-foreground">
								Connect with a supportive community of fitness enthusiasts.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function DumbbellIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M14.4 14.4 9.6 9.6" />
			<path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
			<path d="m21.5 21.5-1.4-1.4" />
			<path d="M3.9 3.9 2.5 2.5" />
			<path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
		</svg>
	);
}

function GroupIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M3 7V5c0-1.1.9-2 2-2h2" />
			<path d="M17 3h2c1.1 0 2 .9 2 2v2" />
			<path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
			<path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
			<rect width="7" height="5" x="7" y="7" rx="1" />
			<rect width="7" height="5" x="10" y="12" rx="1" />
		</svg>
	);
}

function HeartPulseIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
			<path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
		</svg>
	);
}

function NutIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M12 4V2" />
			<path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
			<path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
		</svg>
	);
}

function PodcastIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
			<path d="M8 14a5 5 0 1 1 8 0" />
			<circle cx="12" cy="11" r="1" />
			<path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
		</svg>
	);
}

function TimerIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<line x1="10" x2="14" y1="2" y2="2" />
			<line x1="12" x2="15" y1="14" y2="11" />
			<circle cx="12" cy="14" r="8" />
		</svg>
	);
}
