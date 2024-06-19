import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "../callback/route";

export async function GET(req: NextRequest) {
	try {
		const accessToken = getAccessToken(); // Retrieve the saved access token

		if (!accessToken) {
			return NextResponse.json(
				{ error: "Access token is missing" },
				{ status: 401 }
			);
		}

		// Fetch athlete stats
		const athleteId = 120103378;
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

		const stats = await statsResponse.json();

		// Fetch activities for Jan 2021 - Dec 2022
		const activitiesResponse = await fetch(
			"https://www.strava.com/api/v3/athlete/activities?after=1609459200&before=1672527600&per_page=200",
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

		// Fetch activities for Jan 2023 - Dec 2024
		const activitiesResponse2 = await fetch(
			"https://www.strava.com/api/v3/athlete/activities?after=1672531200&before=1735686000&per_page=200",
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

		return NextResponse.json({
			stats,
			activities,
			activities2,
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
