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
import { run } from "node:test";

const StravaStats = ({
	firstName,
	profilePicture,
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
}: {
	firstName: string;
	profilePicture?: string;
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
}) => {
	const convertMetersToMiles = (meters: number) => {
		return Math.round(meters * 0.000621371);
	};

	return (
		<div className="">
			<Card className="w-[450px]">
				<CardHeader className="flex flex-row items-center justify-between">
					<CardTitle>{`Welcome back ${firstName}!`}</CardTitle>
					{/* Add Avatar */}
					<Avatar>
						<AvatarImage src={profilePicture} />
						<AvatarFallback>KT</AvatarFallback>
					</Avatar>
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
								<CardContent className="space-y-2">
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
								<CardContent className="space-y-2">
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
