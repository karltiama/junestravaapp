"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

import { Activity } from "@/types/strava";

// Define the structure for chart data
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

export function RunningChart({ activities }: { activities: Activity[] }) {
	const [chartData, setChartData] = useState<ChartData[]>([]);

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

			console.log(
				`Activity: ${activity.name}, Type: ${activity.type}, Date: ${
					activity.start_date_local
				}, Month: ${monthNumber + 1}, Miles: ${miles.toFixed(2)}`
			);

			if (!monthlyDataMap[monthNumber]) {
				monthlyDataMap[monthNumber] = { running: 0, biking: 0 };
			}

			if (activity.type === "Run") {
				monthlyDataMap[monthNumber].running += miles;
			} else if (activity.type === "Ride" || activity.type === "Biking") {
				monthlyDataMap[monthNumber].biking += miles;
			}
		});

		// Prepare chart data
		const chartDataArray: ChartData[] = Array.from({ length: 12 }, (_, i) => ({
			month: new Date(0, i).toLocaleString("default", { month: "long" }),
			running: monthlyDataMap[i]?.running || 0,
			biking: monthlyDataMap[i]?.biking || 0,
		}));

		console.log("Monthly Data Map:", monthlyDataMap);
		console.log("Chart Data:", chartDataArray);

		setChartData(chartDataArray);
	}, [activities]);

	return (
		<Card className="w-[450px] mx-auto">
			<CardHeader>
				<CardTitle>Running and Biking Stats</CardTitle>
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
						<Bar dataKey="biking" fill={chartConfig.biking.color} radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Showing total activities for the current year
				</div>
			</CardFooter>
		</Card>
	);
}

// Utility function to convert meters to miles
function convertMetersToMiles(meters: number): number {
	return meters * 0.000621371;
}
