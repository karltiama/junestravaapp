import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

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
		const cookieStore = cookies();
		const accessToken = cookieStore.get("accessToken")?.value;

		if (!accessToken) {
			return NextResponse.json(
				{ error: "Access token is missing" },
				{ status: 401 }
			);
		}

		// Fetch authenticated athlete information
		const athleteResponse = await fetch(
			"https://www.strava.com/api/v3/athlete",
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		if (!athleteResponse.ok) {
			const error = await athleteResponse.json();
			return NextResponse.json(
				{ error: "Failed to fetch athlete information", details: error },
				{ status: athleteResponse.status }
			);
		}

		const athlete = await athleteResponse.json();
		const athleteId = athlete.id;

		// Fetch athlete stats
		const statsUrl = `https://www.strava.com/api/v3/athletes/${athleteId}/stats`;
		const statsResponse = await fetch(statsUrl, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		if (!statsResponse.ok) {
			const error = await statsResponse.json();
			return NextResponse.json(
				{ error: "Failed to fetch athlete stats", details: error },
				{ status: statsResponse.status }
			);
		}

		const athleteStats = await statsResponse.json();

		// Fetch activities for Jan 2021 - Dec 2022
		const activitiesResponse = await fetch(
			"https://www.strava.com/api/v3/athlete/activities?after=1609459200&before=1672527600&per_page=10",
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		if (!activitiesResponse.ok) {
			const error = await activitiesResponse.json();
			return NextResponse.json(
				{ error: "Failed to fetch activities (2021-2022)", details: error },
				{ status: activitiesResponse.status }
			);
		}

		const activities = await activitiesResponse.json();
		const filteredActivities = activities.map(filterActivityData);

		// Fetch activities for Jan 2023 - Dec 2024
		const activitiesResponse2 = await fetch(
			"https://www.strava.com/api/v3/athlete/activities?after=1672531200&before=1735686000&per_page=10",
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		if (!activitiesResponse2.ok) {
			const error = await activitiesResponse2.json();
			return NextResponse.json(
				{ error: "Failed to fetch activities (2023-2024)", details: error },
				{ status: activitiesResponse2.status }
			);
		}

		const activities2 = await activitiesResponse2.json();
		const filteredActivities2 = activities2.map(filterActivityData);

		// Log activities2 to the console
		console.log("Activities (2023-2024):", filteredActivities2);

		return NextResponse.json({
			athlete,
			athleteStats,
			activities: filteredActivities,
			activities2: filteredActivities2,
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
