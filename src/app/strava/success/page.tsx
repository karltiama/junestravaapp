"use client";
import StravaStats from "@/components/StravaStats";
import { useEffect, useState } from "react";

const StravaSuccess = () => {
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/strava/data");
				if (!response.ok) {
					throw new Error("Failed to fetch data from Strava API");
				}
				const result = await response.json();
				console.log("Fetched data:", result); // Log the data to inspect it
				setData(result);
			} catch (error: any) {
				setError(error.message);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col items-center m-8">
			{/* <h1>Strava Data</h1>
			<pre>{JSON.stringify(data.athlete, null, 2)}</pre>
			<pre>{JSON.stringify(data.athleteStats, null, 2)}</pre> */}
			<StravaStats
				firstName={data.athlete.firstname}
				profilePicture={data.athlete.profile_medium}
				runTotalCount={data.athleteStats.all_run_totals.count}
				runTotalDistance={data.athleteStats.all_run_totals.distance}
				runYtdCount={data.athleteStats.ytd_run_totals.count}
				runYtdDistance={data.athleteStats.ytd_run_totals.distance}
				runRecentCount={data.athleteStats.recent_run_totals.count}
				runRecentDistance={data.athleteStats.recent_run_totals.distance}
				bikeTotalCount={data.athleteStats.all_ride_totals.count}
				bikeTotalDistance={data.athleteStats.all_ride_totals.distance}
				bikeYtdCount={data.athleteStats.ytd_ride_totals.count}
				bikeYtdDistance={data.athleteStats.ytd_ride_totals.distance}
				bikeRecentCount={data.athleteStats.recent_ride_totals.count}
				bikeRecentDistance={data.athleteStats.recent_ride_totals.distance}
			/>
			{/* <h1>Welcome{data.athlete.firstname}</h1>
			<h2>Athlete Info:</h2>
			<pre>{JSON.stringify(data.athlete, null, 2)}</pre>
			<h2>Athlete Stats:</h2>
			<pre>{JSON.stringify(data.athleteStats, null, 2)}</pre>
			<h2>Activities (2021-2022):</h2>
			<pre>{JSON.stringify(data.activities, null, 2)}</pre>
			<h2>Activities (2023-2024):</h2>
			<pre>{JSON.stringify(data.activities2, null, 2)}</pre> */}
		</div>
	);
};

export default StravaSuccess;
