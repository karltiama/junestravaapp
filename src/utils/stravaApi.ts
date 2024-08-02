// src/utils/stravaApi.ts

// Fetch athlete information
export async function fetchAthleteInfo(accessToken: string) {
	const response = await fetch("https://www.strava.com/api/v3/athlete", {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(`Failed to fetch athlete info: ${error.message}`);
	}

	return response.json();
}

// Fetch athlete stats
export async function fetchAthleteStats(
	accessToken: string,
	athleteId: number
) {
	const response = await fetch(
		`https://www.strava.com/api/v3/athletes/${athleteId}/stats`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	if (!response.ok) {
		const error = await response.json();
		throw new Error(`Failed to fetch athlete stats: ${error.message}`);
	}

	return response.json();
}

// Fetch activities
export async function fetchActivities(
	accessToken: string,
	after: number,
	before: number
) {
	const response = await fetch(
		`https://www.strava.com/api/v3/athlete/activities?after=${after}&before=${before}&per_page=200`,
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);

	if (!response.ok) {
		const error = await response.json();
		throw new Error(`Failed to fetch activities: ${error.message}`);
	}

	return response.json();
}
