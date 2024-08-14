"use client";
import ActivityList from "@/components/ActivityList";
import CountDown from "@/components/CountDown";
import Dashboard from "@/components/Dashboard";
import DashboardLoading from "@/components/DashboardLoading";
import { LoginInfo } from "@/components/LoginInfo";
import PaceCalculator from "@/components/PaceCalculator";
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
		return <DashboardLoading />;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	console.log(data.athlete.firstName);
	return (
		<div className="">
			<Dashboard
				firstName={data.athlete.firstname}
				profilePicture={data.athlete.profile_medium}
				created_at={data.athlete.created_at}
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
				activities={data.activities2}
			/>
		</div>
	);
};

export default StravaSuccess;
