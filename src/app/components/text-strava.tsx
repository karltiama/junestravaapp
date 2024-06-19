"use client";

import { useState } from "react";

const TestStrava = () => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchData = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch("/api/strava", {
				method: "POST", // Ensure the method matches your API route's expected method
			});
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const result = await response.json();
			setData(result);
		} catch (error) {
			setError((error as Error).message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<button onClick={fetchData} disabled={loading}>
				{loading ? "Loading..." : "Fetch Strava Data"}
			</button>
			{error && <p>Error: {error}</p>}
			{data && (
				<div>
					<h3>Stats:</h3>
					<pre>{JSON.stringify(data.stats, null, 2)}</pre>
					<h3>Activities (2021-2022):</h3>
					<pre>{JSON.stringify(data.activities, null, 2)}</pre>
					<h3>Activities (2023-2024):</h3>
					<pre>{JSON.stringify(data.activities2, null, 2)}</pre>
				</div>
			)}
		</div>
	);
};

export default TestStrava;
