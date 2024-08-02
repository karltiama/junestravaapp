export const convertMetersToMiles = (meters: number): string => {
	return (meters * 0.000621371).toFixed(2);
};

export const convertSecondsToMinutes = (seconds: number): string => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	return `${minutes}m ${remainingSeconds}s`;
};
