"use client";
import React, { useEffect, useState } from "react";

// ui imports
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { CartesianGrid, XAxis, BarChart, Bar } from "recharts";
import {
	ChartConfig,
	ChartTooltipContent,
	ChartTooltip,
	ChartContainer,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
	TrendingUp,
	TrendingDown,
	Ruler,
	Timer,
	MountainSnow,
	Activity,
	HeartCrack,
} from "lucide-react";

// type imports
import { ActivityType } from "@/types/strava";

interface ChartData {
	month: string;
	running: number;
	biking: number;
}

const chartConfig = {
	running: {
		label: "Running",
		color: "hsl(var(--chart-1))",
	},
	biking: {
		label: "Biking",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;
// util imports
import {
	convertMetersToFeet,
	convertMetersToMiles,
	convertSecondsToMinutes,
	formatIso,
	formatDate,
} from "@/utils/conversions";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const activityTypeToImageMap: { [key: string]: string } = {
	Run: "/person-running-solidtwo.svg",
	Walk: "/person-walking-solid.svg",
	Ride: "/person-biking-solid.svg",
	Workout: "/dumbbell-solid.svg",
	WeightTraining: "/dumbbell-solid.svg",
};

export default function Dashboard({
	firstName,
	profilePicture,
	created_at,
	runTotalCount,
	runTotalDistance,
	runYtdCount,
	runYtdDistance,
	runRecentCount,
	runRecentDistance,
	bikeTotalCount,
	bikeTotalDistance,
	bikeYtdCount,
	bikeYtdDistance,
	bikeRecentCount,
	bikeRecentDistance,
	activities,
}: {
	firstName: string;
	profilePicture?: string;
	created_at: string;
	runTotalCount: number;
	runTotalDistance: number;
	runYtdCount: number;
	runYtdDistance: number;
	runRecentCount: number;
	runRecentDistance: number;
	bikeTotalCount: number;
	bikeTotalDistance: number;
	bikeYtdCount: number;
	bikeYtdDistance: number;
	bikeRecentCount: number;
	bikeRecentDistance: number;
	activities: ActivityType[];
	// profilePicture: string;
	// created_at: string;
}) {
	const [chartData, setChartData] = useState<ChartData[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const activitiesPerPage = 8;
	const maxPageNumbersToShow = 5; // Maximum number of page numbers to show

	// Calculate the indices for slicing the activities array
	const indexOfLastActivity = currentPage * activitiesPerPage;
	const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
	const currentActivities = activities.slice(
		indexOfFirstActivity,
		indexOfLastActivity
	);

	const totalPages = Math.ceil(activities.length / activitiesPerPage);

	// Calculate the start and end page numbers to display
	const startPage = Math.max(
		1,
		currentPage - Math.floor(maxPageNumbersToShow / 2)
	);
	const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

	// Adjust the startPage if we are near the end
	const adjustedStartPage = Math.max(1, endPage - maxPageNumbersToShow + 1);

	// Function to handle page change
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	useEffect(() => {
		const currentYear = new Date().getFullYear();

		// Calculate monthly running and biking distances
		const monthlyDataMap: {
			[key: number]: { running: number; biking: number };
		} = {};

		activities.forEach((activity) => {
			const date = new Date(activity.start_date_local);
			if (date.getFullYear() !== currentYear) return; // Ensure we only process activities from the current year

			const monthNumber = date.getMonth(); // 0-11
			const miles = convertMetersToMiles(activity.distance); // Convert meters to miles

			if (!monthlyDataMap[monthNumber]) {
				monthlyDataMap[monthNumber] = { running: 0, biking: 0 };
			}

			if (activity.type === "Run") {
				monthlyDataMap[monthNumber].running += Number(miles);
			} else if (activity.type === "Ride" || activity.type === "Biking") {
				monthlyDataMap[monthNumber].biking += Number(miles);
			}
		});

		// Prepare chart data
		const chartDataArray: ChartData[] = Array.from({ length: 12 }, (_, i) => ({
			month: new Date(0, i).toLocaleString("default", { month: "long" }),
			running: monthlyDataMap[i]?.running || 0,
			biking: monthlyDataMap[i]?.biking || 0,
		}));

		setChartData(chartDataArray);
	}, [activities]);

	return (
		<div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
			<div className="space-y-4 md:space-y-6 lg:space-y-8">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
						{`Welcome back to your Dashboard ${firstName}!`}
					</h1>
					<p className="mt-3 text-lg text-muted-foreground md:mt-5 md:text-xl lg:text-base xl:text-lg">
						View your fitness stats and recent activity below.
					</p>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
					<div className="grid gap-4 md:col-span-2 lg:gap-6">
						{/* // Overall Stats */}
						<Card className="w-full">
							<CardHeader className="flex flex-row items-center justify-between">
								<CardTitle>Overall Stats</CardTitle>
								<CardDescription>{`Joined Strava: ${formatDate(
									created_at
								)}`}</CardDescription>
								<Avatar>
									<AvatarImage src={profilePicture} />
									<AvatarFallback>{firstName[0]}</AvatarFallback>
								</Avatar>
							</CardHeader>
							<CardContent>
								<Tabs defaultValue="running" className="w-full">
									<TabsList className="grid w-full grid-cols-2">
										<TabsTrigger value="running">Running</TabsTrigger>
										<TabsTrigger value="biking">Biking</TabsTrigger>
									</TabsList>
									<TabsContent value="running">
										<Card className="flex flex-col justify-center items-center">
											<CardHeader>
												<CardTitle className="">Running Totals</CardTitle>
												<CardDescription>You&apos;ve logged:</CardDescription>
											</CardHeader>
											<CardContent className="">
												<div className="">
													Total of {runTotalCount} runs for{" "}
													{convertMetersToMiles(runTotalDistance)} miles
												</div>
												<div>
													Yearly Total: {runYtdCount} runs for{" "}
													{convertMetersToMiles(runYtdDistance)} miles
												</div>
												<div>
													Last 4 weeks: {runRecentCount} runs for{" "}
													{convertMetersToMiles(runRecentDistance)} miles
												</div>
											</CardContent>
										</Card>
									</TabsContent>
									<TabsContent value="biking">
										<Card className="flex flex-col justify-center items-center">
											<CardHeader className="">
												<CardTitle>Biking Totals</CardTitle>
												<CardDescription>You&apos;ve logged:</CardDescription>
											</CardHeader>
											<CardContent className="">
												<div>
													Total of: {bikeTotalCount} rides for{" "}
													{convertMetersToMiles(bikeTotalDistance)} miles
												</div>
												<div>
													Yearly Total: {bikeYtdCount} rides for{" "}
													{convertMetersToMiles(bikeYtdDistance)} miles
												</div>
												<div>
													Last 4 weeks: {bikeRecentCount} rides for{" "}
													{convertMetersToMiles(bikeRecentDistance)} miles
												</div>
											</CardContent>
										</Card>
									</TabsContent>
								</Tabs>
							</CardContent>
						</Card>

						{/* Monthly Running and Biking Chart */}
						<Card className="w-full">
							<CardHeader>
								<CardTitle>Running and Biking Month to Month</CardTitle>
								<CardDescription>
									January - December {new Date().getFullYear()}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer config={chartConfig}>
									<BarChart accessibilityLayer data={chartData}>
										<CartesianGrid vertical={false} />
										<XAxis
											dataKey="month"
											tickLine={false}
											tickMargin={10}
											axisLine={false}
											tickFormatter={(value) => value.slice(0, 3)}
										/>
										<ChartTooltip
											cursor={false}
											content={<ChartTooltipContent indicator="dashed" />}
										/>
										<Bar
											dataKey="running"
											fill={chartConfig.running.color}
											radius={4}
										/>
										<Bar
											dataKey="biking"
											fill={chartConfig.biking.color}
											radius={4}
										/>
									</BarChart>
								</ChartContainer>
							</CardContent>
							<CardFooter className="flex-col items-start gap-2 text-sm">
								{/* <div className="flex gap-2 font-medium leading-none">
									Trending up by 5.2% this month{" "}
									<TrendingUp className="h-4 w-4" />
								</div> */}
								<div className="leading-none text-muted-foreground mx-auto">
									Showing total activities for the current year - value in miles
								</div>
							</CardFooter>
						</Card>
					</div>
					<Card className="w-full md:col-span-2 lg:col-span-1">
						<CardHeader className="text-2xl font-semibold">
							Recent Activities
						</CardHeader>
						<CardContent className="">
							<Card className="">
								{currentActivities.map((activity) => (
									<CardContent key={activity.id} className="pb-0">
										<Accordion type="single" collapsible className="w-full">
											<AccordionItem value={`item-${activity.id}`}>
												<AccordionTrigger>
													<div className="flex items-center justify-between w-full">
														<div className="flex flex-col items-center">
															<span>{activity.name}</span>
															<span>{formatIso(activity.date)}</span>
														</div>
														<Avatar className="">
															<AvatarImage
																src={activityTypeToImageMap[activity.type]}
															/>
															<AvatarFallback>{activity.type}</AvatarFallback>
														</Avatar>
													</div>
												</AccordionTrigger>
												<AccordionContent>
													<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
														<div className="space-y-2">
															<p className="flex gap-2 font-medium leading-none">
																<Ruler className="h-4 w-4" />
																{convertMetersToMiles(activity.distance)} miles
															</p>
															<p className="flex gap-2 font-medium leading-none">
																<Timer className="h-4 w-4" />
																{convertSecondsToMinutes(activity.moving_time)}
															</p>
															<p className="flex gap-2 font-medium leading-none">
																<MountainSnow className="h-4 w-4" />
																{convertMetersToFeet(
																	activity.total_elevation_gain
																)}
																Feet
															</p>
														</div>
														<div className="space-y-2">
															<p className="flex gap-2 font-medium leading-none">
																<Activity className="h-4 w-4" />
																{activity.average_heartrate} bpm
															</p>
															<p className="flex gap-2 font-medium leading-none">
																<HeartCrack className="h-4 w-4" />
																{activity.suffer_score}
															</p>
														</div>
													</div>
												</AccordionContent>
											</AccordionItem>
										</Accordion>
									</CardContent>
								))}
							</Card>
						</CardContent>
						<div className="flex justify-center m-4">
							{Array.from(
								{ length: endPage - adjustedStartPage + 1 },
								(_, i) => (
									<Button
										key={i + adjustedStartPage}
										onClick={() => paginate(i + adjustedStartPage)}
										className={`px-4 py-2 mx-1 border rounded ${
											currentPage === i + adjustedStartPage
												? "bg-blue-500 text-white"
												: "bg-gray-200"
										}`}>
										{i + adjustedStartPage}
									</Button>
								)
							)}
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
