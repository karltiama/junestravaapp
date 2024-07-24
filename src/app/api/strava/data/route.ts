import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "../callback/route";

const filterActivityData = (activity: any) => ({
	id: activity.id,
	name: activity.name,
	distance: activity.distance,
	moving_time: activity.moving_time,
	elapsed_time: activity.elapsed_time,
	total_elevation_gain: activity.total_elevation_gain,
	type: activity.type,
	start_date: activity.start_date,
	start_date_local: activity.start_date_local,
	location_country: activity.location_country,
	average_speed: activity.average_speed,
	max_speed: activity.max_speed,
	average_heartrate: activity.average_heartrate,
	max_heartrate: activity.max_heartrate,
	suffer_score: activity.suffer_score,
});

export async function GET(req: NextRequest) {
	try {
		const accessToken = getAccessToken(); // Retrieve the saved access token

		if (!accessToken) {
			return NextResponse.json(
				{ error: "Access token is missing" },
				{ status: 401 }
			);
		}

		// Fetch activities for Jan 2023 - Dec 2024
		const activitiesResponse = await fetch(
			"https://www.strava.com/api/v3/athlete/activities?after=1672531200&before=1735686000&per_page=10",
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		if (!activitiesResponse.ok) {
			const error = await activitiesResponse.json();
			return NextResponse.json(
				{ error: "Failed to fetch activities (2023-2024)", details: error },
				{ status: activitiesResponse.status }
			);
		}

		const activities = await activitiesResponse.json();
		const filteredActivities = activities.map(filterActivityData);

		// Log activities to the console
		console.log("Activities (2023-2024):", filteredActivities);

		return NextResponse.json({
			activities: filteredActivities,
		});
	} catch (error) {
		console.error("Internal Server Error", error);
		if (error instanceof Error) {
			return NextResponse.json(
				{ error: "Internal Server Error", details: error.message },
				{ status: 500 }
			);
		}
		return NextResponse.json(
			{ error: "Internal Server Error", details: "Unknown error" },
			{ status: 500 }
		);
	}
}
