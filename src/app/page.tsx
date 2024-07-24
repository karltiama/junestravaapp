`use client`;

import Link from "next/link";

const authorizeUrl = `https://www.strava.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI}&approval_prompt=force&scope=read,activity:read,activity:read_all`;

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Strava API Test</h1>
			<h1>Connect with Strava</h1>
			<Link href={authorizeUrl}>
				<button>Authorize with Strava</button>
			</Link>
		</main>
	);
}
