import { NextRequest, NextResponse } from "next/server";

let accessToken = "";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const code = searchParams.get("code");

	if (!code) {
		return NextResponse.json({ error: "Missing code" }, { status: 400 });
	}

	const headers: HeadersInit = {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
	};

	const body = JSON.stringify({
		client_id: process.env.STRAVA_CLIENT_ID,
		client_secret: process.env.STRAVA_SECRET,
		code: code,
		grant_type: "authorization_code",
	});

	const response = await fetch("https://www.strava.com/oauth/token", {
		method: "POST",
		headers: headers,
		body: body,
	});

	if (!response.ok) {
		const errorResponse = await response.json();
		return NextResponse.json(
			{ error: "Failed to get access token", details: errorResponse },
			{ status: response.status }
		);
	}

	const tokenData = await response.json();
	accessToken = tokenData.access_token; // Save the access token

	// Redirect to a success page or another part of your app
	const redirectUrl = new URL("/strava/success", req.url).toString();
	return NextResponse.redirect(redirectUrl);
}

export function getAccessToken() {
	return accessToken;
}
