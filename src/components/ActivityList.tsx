import React, { useState } from "react";
import { ActivityType } from "@/types/strava"; // Ensure you have a type for Activity
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
import { Button } from "./ui/button";
import { Activity, HeartCrack, MountainSnow, Ruler, Timer } from "lucide-react";

interface ActivityListProps {
	activities: ActivityType[];
}

const activityTypeToImageMap: { [key: string]: string } = {
	Run: "/person-running-solidtwo.svg",
	Walk: "/person-walking-solid.svg",
	Ride: "/person-biking-solid.svg",
	Workout: "/dumbbell-solid.svg",
	WeightTraining: "/dumbbell-solid.svg",
};

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const activitiesPerPage = 5;
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

	return (
		<div className="">
			<Card className="w-[450px] mx-auto">
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
													<span>{formatDateTime(activity.date)}</span>
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
														{convertMetersToFeet(activity.total_elevation_gain)}
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
					{Array.from({ length: endPage - adjustedStartPage + 1 }, (_, i) => (
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
					))}
				</div>
			</Card>
		</div>
	);
};

export default ActivityList;
