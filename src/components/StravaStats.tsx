import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StravaStatsProps } from "@/types/strava";
import { convertMetersToMiles } from "@/utils/conversions";

const StravaStats = (props: StravaStatsProps) => {
	const {
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
	} = props;

	return (
		<div className="">
			<Card className="max-w-[450px] mx-auto">
				<CardHeader className="flex flex-row items-center justify-between">
					<CardTitle>Stats at a Glance</CardTitle>
				</CardHeader>
				<CardContent>
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
							<Card>
								<CardHeader className="">
									<CardTitle>Biking Totals</CardTitle>
									<CardDescription>You've logged:</CardDescription>
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
										Last 4 weeks: {bikeRecentCount} runs for{" "}
										{convertMetersToMiles(bikeRecentDistance)} miles
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);
};

export default StravaStats;
