"use client";
import { useEffect, useState, useMemo } from "react";
import Dashboard from "@/components/Dashboard";
import DashboardLoading from "@/components/DashboardLoading";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface StravaData {
	athlete: {
		firstname: string;
		profile_medium: string;
		created_at: string;
	};
	athleteStats: {
		all_run_totals: { count: number; distance: number };
		ytd_run_totals: { count: number; distance: number };
		recent_run_totals: { count: number; distance: number };
		all_ride_totals: { count: number; distance: number };
		ytd_ride_totals: { count: number; distance: number };
		recent_ride_totals: { count: number; distance: number };
	};
	activities2: any[]; // Replace 'any' with a proper activity type
}

const useStravaData = () => {
	const [data, setData] = useState<StravaData | null>(null);
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

	return { data, error, loading };
};

const StravaSuccess = () => {
	const { data, error, loading } = useStravaData();

	const memoizedDashboard = useMemo(() => {
		if (!data) return null;
		return (
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
		);
	}, [data]);

	if (loading) {
		return <DashboardLoading />;
	}

	if (error) {
		return (
			<Alert variant="destructive">
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>{error}</AlertDescription>
			</Alert>
		);
	}

	return <div className="">{memoizedDashboard}</div>;
};

export default StravaSuccess;
