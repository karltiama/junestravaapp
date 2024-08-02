"use client";
import ActivityList from "@/components/ActivityList";
import { RunningChart } from "@/components/RunningChart";
import StravaStats from "@/components/StravaStats";
import { useEffect, useState } from "react";

const StravaSuccess = () => {
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch("/api/strava/data");
				if (!response.ok) {
					throw new Error("Failed to fetch data from Strava API");
				}
				const result = await response.json();
				console.log("Fetched data:", result); // Log the data to inspect it
				setData(result);
				setError(null);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="flex flex-col items-center mt-6">
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
			<ActivityList activities={data.activities2} />
			<RunningChart activities={data.activities2} />
		</div>
	);
};

export default StravaSuccess;
