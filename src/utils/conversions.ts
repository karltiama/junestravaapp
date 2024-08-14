export const convertMetersToMiles = (meters: number): string => {
	return (meters * 0.000621371).toFixed(2);
};

export const convertMetersToFeet = (meters: number): string => {
	return (meters * 3.28084).toFixed(0);
};

export const convertSecondsToMinutes = (seconds: number): string => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}m ${remainingSeconds}s`;
};

export const formatIso = (isoDate: string): string => {
	const date = new Date(isoDate);

	// Extract the date, month
	const day = date.getDate();
	const month = date.toLocaleString("default", { month: "long" });
	const year = date.getFullYear();

	// Extract hours, minutes, seconds
	let hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? "PM" : "AM";

	// Convert to 12-hour format
	hours = hours % 12;
	hours = hours ? hours : 12; // 0 should be 12

	// Format the time
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

	return `${month} ${day} ${year} at ${hours}:${formattedMinutes} ${ampm}`;
};

export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
};
