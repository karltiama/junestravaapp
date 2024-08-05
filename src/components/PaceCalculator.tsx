import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { convertMetersToMiles } from "@/utils/conversions";
import { Button } from "./ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

const raceDistances: { [key: string]: number } = {
	five: 5000, // 5k in meters
	ten: 10000, // 10k in meters
	half: 21097.5, // Half marathon in meters
	marathon: 42195, // Marathon in meters
};

const PaceCalculator: React.FC = () => {
	const [distance, setDistance] = useState<number>(0);
	const [time, setTime] = useState<string>("00:00:00");
	const [pace, setPace] = useState<string>("0:00");

	const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTime(e.target.value);
	};

	const handleRaceSelection = (value: string) => {
		const raceDistance = raceDistances[value] || 0;
		setDistance(raceDistance);
	};

	const calculatePace = () => {
		const timeParts = time.split(":").map(Number);
		if (timeParts.length !== 3) return;

		const timeInSeconds =
			timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];

		if (distance > 0 && timeInSeconds > 0) {
			// Convert distance from meters to miles
			const distanceInMiles = Number(convertMetersToMiles(distance));

			// Convert time from seconds to minutes
			const timeInMinutes = timeInSeconds / 60;

			// Calculate pace in minutes per mile
			const paceInMinutesPerMile = timeInMinutes / distanceInMiles;

			// Format pace as minutes:seconds
			const minutes = Math.floor(paceInMinutesPerMile);
			const seconds = Math.round((paceInMinutesPerMile - minutes) * 60);

			setPace(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
		} else {
			setPace("0:00"); // Set to 0:00 if distance or time is invalid
		}
	};

	return (
		<div>
			<Card className="w-[450px] mx-auto">
				<CardHeader>
					<CardTitle>Pace Calculator</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Select onValueChange={handleRaceSelection}>
						<SelectTrigger className="w-full ">
							<SelectValue placeholder="Select Race" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Race Length</SelectLabel>
								<SelectItem value="five">5k</SelectItem>
								<SelectItem value="ten">10k</SelectItem>
								<SelectItem value="half">Half Marathon</SelectItem>
								<SelectItem value="marathon">Marathon</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<div className="flex flex-col">
						<label className="mb-1">Desired Finish Time (HH:MM:SS)</label>
						<Input
							type="text"
							value={time}
							onChange={handleTimeChange}
							placeholder="00:00:00"
							className="w-full"
						/>
					</div>
					<Button onClick={calculatePace} className="w-full">
						Calculate Pace
					</Button>
					<div className="flex flex-col">
						<label className="mt-2">Pace (minutes per mile):</label>
						<Input type="text" value={pace} readOnly className="w-full" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default PaceCalculator;
