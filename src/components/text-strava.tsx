"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "./ui/button";

const TestStrava = () => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchData = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch("/api/strava", {
				method: "POST", // Ensure the method matches your API route's expected method
			});
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const result = await response.json();
			setData(result);
		} catch (error) {
			setError((error as Error).message);
		} finally {
			setLoading(false);
		}
	};

	const convertMetersToMiles = (meters: number) => {
		return Math.round(meters * 0.000621371);
	};

	return (
		<div>
			<Button onClick={fetchData} disabled={loading} className="m-2">
				{loading ? "Loading..." : "Fetch Strava Data"}
			</Button>
			{error && <p>Error: {error}</p>}
			{data && (
				<div>
					{/* <pre>{JSON.stringify(data.stats, null, 2)}</pre> */}
					<Tabs defaultValue="running" className="w-[400px]">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="running">Running</TabsTrigger>
							<TabsTrigger value="biking">Biking</TabsTrigger>
						</TabsList>
						<TabsContent value="running">
							<Card>
								<CardHeader>
									<CardTitle>Running Totals</CardTitle>
									<CardDescription>You've logged:</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="">
										Total of {data.stats.all_run_totals.count} runs for{" "}
										{convertMetersToMiles(data.stats.all_run_totals.distance)}{" "}
										miles
									</div>
									<div>
										Yearly Total: {data.stats.ytd_run_totals.count} runs for{" "}
										{convertMetersToMiles(data.stats.ytd_run_totals.distance)}{" "}
										miles
									</div>
									<div>
										Last 4 weeks: {data.stats.recent_run_totals.count} runs for{" "}
										{convertMetersToMiles(
											data.stats.recent_run_totals.distance
										)}{" "}
										miles
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="biking">
							<Card>
								<CardHeader className="">
									<CardTitle>Biking Totals</CardTitle>
									<CardDescription>You've logged:</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div>
										Total of: {data.stats.all_ride_totals.count} rides for{" "}
										{convertMetersToMiles(data.stats.all_ride_totals.distance)}{" "}
										miles
									</div>
									<div>
										Yearly Total: {data.stats.ytd_ride_totals.count} rides for{" "}
										{convertMetersToMiles(data.stats.ytd_ride_totals.distance)}{" "}
										miles
									</div>
									<div>
										Last 4 weeks: {data.stats.recent_ride_totals.count} runs for{" "}
										{convertMetersToMiles(
											data.stats.recent_ride_totals.distance
										)}{" "}
										miles
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
					{/* <h3>Activities (2021-2022):</h3>
					<pre>{JSON.stringify(data.activities, null, 2)}</pre>
					<h3>Activities (2023-2024):</h3>
					<pre>{JSON.stringify(data.activities2, null, 2)}</pre> */}
				</div>
			)}
		</div>
	);
};

export default TestStrava;
