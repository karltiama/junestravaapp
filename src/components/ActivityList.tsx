import React from "react";
import { Activity } from "@/types/strava"; // Ensure you have a type for Activity

interface ActivityListProps {
	activities: Activity[];
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
	return (
		<div className="activity-list mt-6">
			<h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
			<ul className="space-y-4">
				{activities.map((activity) => (
					<li key={activity.id} className="p-4 border rounded bg-gray-50">
						<h3 className="text-xl font-bold">{activity.name}</h3>
						<p>Type: {activity.type}</p>
						<p>Distance: {activity.distance} meters</p>
						<p>Moving Time: {activity.moving_time} seconds</p>
						<p>Total Elevation Gain: {activity.total_elevation_gain} meters</p>
						<p>Average Heart Rate: {activity.average_heartrate} bpm</p>
						<p>Suffer Score: {activity.suffer_score}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ActivityList;
