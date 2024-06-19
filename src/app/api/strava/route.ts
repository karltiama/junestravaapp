// app/api/strava/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const headers: HeadersInit = {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
	};

	const body = JSON.stringify({
		client_id: process.env.STRAVA_CLIENT_ID,
		client_secret: process.env.STRAVA_SECRET,
		refresh_token: process.env.STRAVA_REFRESH_TOKEN,
		grant_type: "refresh_token",
	});

	const refreshAccess = await fetch("https://www.strava.com/oauth/token", {
		method: "POST",
		headers: headers,
		body: body,
	});

	const accessJson: {
		access_token: string;
	} = await refreshAccess.json();

	const accessToken = accessJson.access_token;

	// stats
	const athleteId = 120103378;
	const statsUrl = `https://www.strava.com/api/v3/athletes/${athleteId}/stats`;
	const statParams = new URLSearchParams({
		access_token: accessToken,
	});

	const statsRequest = await fetch(`${statsUrl}?${statParams.toString()}`);
	const stats = await statsRequest.json();

	// activities
	const activityUrl = "https://www.strava.com/api/v3/athlete/activities";

	// (Jan 2021 - Dec 2022)
	const activityParams = new URLSearchParams({
		after: "1609459200", // 01/01/2021
		before: "1672527600", // 31/12/2022
		per_page: "200",
		access_token: accessToken,
	});

	const activitiesRequest = await fetch(
		`${activityUrl}?${activityParams.toString()}`
	);
	const activities = await activitiesRequest.json();

	// (Jan 2023 - Dec 2024)
	const activityParams2 = new URLSearchParams({
		after: "1672531200", // 01/01/2023
		before: "1735686000", // 31/12/2024
		per_page: "200",
		access_token: accessToken,
	});

	const activitiesRequest2 = await fetch(
		`${activityUrl}?${activityParams2.toString()}`
	);
	const activities2 = await activitiesRequest2.json();

	return NextResponse.json({
		stats,
		activities,
		activities2,
	});
}
