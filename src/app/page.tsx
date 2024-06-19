import TestStrava from "./components/text-strava";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Strava API Test</h1>
			<TestStrava />
		</main>
	);
}
