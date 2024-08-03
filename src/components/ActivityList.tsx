import React from "react";
import { Activity } from "@/types/strava"; // Ensure you have a type for Activity
import { Card, CardContent, CardHeader } from "./ui/card";
import {
	convertMetersToFeet,
	convertMetersToMiles,
	convertSecondsToMinutes,
	formatDateTime,
} from "@/utils/conversions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

interface ActivityListProps {
	activities: Activity[];
}

const activityTypeToImageMap: { [key: string]: string } = {
	Run: "/person-running-solidtwo.svg",
	Walk: "/person-walking-solid.svg",
	Ride: "/person-biking-solid.svg",
	Workout: "/dumbbell-solid.svg",
	WeightTraining: "/dumbbell-solid.svg",
};

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
	return (
		<div className="mt-6">
			<Card className="w-[450px] mx-auto">
				<CardHeader className="text-2xl font-semibold">
					Recent Activities
				</CardHeader>
				<CardContent className="">
					<Card className="">
						{activities.map((activity) => (
							<CardContent key={activity.id} className="pb-0">
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="item-1">
										<AccordionTrigger>
											<div className="flex flex-row items-center justify-between w-full">
												<div className="flex flex-col">
													<span>{activity.name}</span>
													<span> {formatDateTime(activity.date)}</span>
												</div>
												<Avatar className="ml-4">
													<AvatarImage
														src={activityTypeToImageMap[activity.type]}
													/>
													<AvatarFallback>{activity.type}</AvatarFallback>
												</Avatar>
											</div>
										</AccordionTrigger>
										<AccordionContent>
											<p>
												Distance: {convertMetersToMiles(activity.distance)}{" "}
												miles
											</p>
											<p>
												Moving Time:{" "}
												{convertSecondsToMinutes(activity.moving_time)}
											</p>
											<p>
												Total Elevation Gain:{" "}
												{convertMetersToFeet(activity.total_elevation_gain)}{" "}
												Feet
											</p>
											<p>
												Average Heart Rate: {activity.average_heartrate} bpm
											</p>
											<p>Suffer Score: {activity.suffer_score}</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</CardContent>
						))}
					</Card>
				</CardContent>
			</Card>
		</div>
	);
};

export default ActivityList;
