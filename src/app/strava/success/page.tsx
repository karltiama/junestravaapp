"use client";

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
		<div>
			<h1>Strava Data</h1>
			<h2>Stats:</h2>
			<pre>{JSON.stringify(data.stats, null, 2)}</pre>
			<h2>Activities (2023-2024):</h2>
			<pre>{JSON.stringify(data.activities2, null, 2)}</pre>
		</div>
	);
};

export default StravaSuccess;