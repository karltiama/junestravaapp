import React from "react";
import { Activity } from "@/types/strava"; // Ensure you have a type for Activity
import { Card, CardContent, CardHeader } from "./ui/card";
import {
	convertMetersToMiles,
	convertSecondsToMinutes,
} from "@/utils/conversions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ActivityListProps {
	activities: Activity[];
}

const activityTypeToImageMap: { [key: string]: string } = {
	Run: "/person-running-solidtwo.svg",
	Walk: "/person-walking-solid.svg",
	Ride: "/person-biking-solid.svg",
	Workout: "/dumbbell-solid.svg",
};

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
	return (
		<div className="mt-6">
			<Card className="w-[450px] mx-auto">
				<CardHeader className="text-2xl font-semibold mb-4">
					Last 10 Activities
				</CardHeader>
				<CardContent className="space-y-2">
					<Card className="space-y-2">
						{activities.map((activity) => (
							<CardContent key={activity.id} className="border-b">
								<CardHeader className="">
									<div className="flex flex-row justify-between">
										{activity.name}
										<Avatar>
											<AvatarImage
												src={activityTypeToImageMap[activity.type]}
											/>{" "}
											*/
											<AvatarFallback>{activity.type}</AvatarFallback>
										</Avatar>
									</div>
								</CardHeader>
								<p>Type: {activity.type}</p>
								<p>Distance: {convertMetersToMiles(activity.distance)} miles</p>
								<p>
									Moving Time: {convertSecondsToMinutes(activity.moving_time)}
								</p>
								<p>
									Total Elevation Gain:{" "}
									{convertMetersToMiles(activity.total_elevation_gain)} miles
								</p>
								<p>Average Heart Rate: {activity.average_heartrate} bpm</p>
								<p>Suffer Score: {activity.suffer_score}</p>
							</CardContent>
						))}
					</Card>
				</CardContent>
			</Card>
		</div>
	);
};

export default ActivityList;
