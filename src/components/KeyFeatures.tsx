import {
	Apple,
	Dumbbell,
	Group,
	HeartPulse,
	Nut,
	Podcast,
	Timer,
} from "lucide-react";

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
								<Timer className="h-6 w-6" />
							</div>
							<h4 className="mt-4 text-lg font-medium">Performance Tracking</h4>
							<p className="mt-2 text-muted-foreground">
								Analyze your fitness progress with detailed performance metrics.
							</p>
						</div>
						<div className="rounded-lg border bg-background p-4 shadow-sm">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<Podcast className="h-6 w-6" />
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
								<Nut className="h-6 w-6" />
							</div>
							<h4 className="mt-4 text-lg font-medium">Nutrition Planning</h4>
							<p className="mt-2 text-muted-foreground">
								Get personalized nutrition plans to fuel your fitness
								performance.
							</p>
						</div>
						<div className="rounded-lg border bg-background p-4 shadow-sm">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
								<Group className="h-6 w-6" />
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
