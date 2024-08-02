export interface StravaStatsProps {
	firstName: string;
	profilePicture?: string;
	runTotalCount: number;
	runTotalDistance: number;
	runYtdCount: number;
	runYtdDistance: number;
	runRecentCount: number;
	runRecentDistance: number;
	bikeTotalCount: number;
	bikeTotalDistance: number;
	bikeYtdCount: number;
	bikeYtdDistance: number;
	bikeRecentCount: number;
	bikeRecentDistance: number;
}

export interface Activity {
	id: number;
	start_date_local: string;
	date: string;
	name: string;
	distance: number;
	moving_time: number;
	total_elevation_gain: number;
	type: string;
	average_heartrate: number;
	suffer_score: number;
}
