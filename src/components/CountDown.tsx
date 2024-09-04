"use client";
import React, { useState, useEffect } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";

export default function Component() {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (selectedDate) {
			timer = setInterval(() => {
				const now = new Date();
				const distance = selectedDate.getTime() - now.getTime();

				if (distance > 0) {
					const days = Math.floor(distance / (1000 * 60 * 60 * 24));
					const hours = Math.floor(
						(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					);
					const minutes = Math.floor(
						(distance % (1000 * 60 * 60)) / (1000 * 60)
					);
					const seconds = Math.floor((distance % (1000 * 60)) / 1000);

					setCountdown({ days, hours, minutes, seconds });
				} else {
					clearInterval(timer);
					setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				}
			}, 1000);
		}

		return () => clearInterval(timer);
	}, [selectedDate]);

	const handleDateSelect = (date: Date) => {
		setSelectedDate(date);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!selectedDate) {
			alert("Please select a date!");
		}
	};

	return (
		<Card className="w-full max-w-md mx-auto">
			<CardHeader>
				<CardTitle>Countdown to Your Event</CardTitle>
				<CardDescription>
					Enter a date and we&apos;ll show you the time remaining.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-1.5">
						<Label htmlFor="date">Date</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									className="w-full justify-start font-normal">
									<CalendarDays className="mr-2 h-4 w-4" />
									{selectedDate ? (
										selectedDate.toLocaleDateString()
									) : (
										<span>Pick a date</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									mode="single"
									selected={selectedDate || undefined}
									onSelect={
										handleDateSelect as (date: Date | undefined) => void
									}
								/>
							</PopoverContent>
						</Popover>
					</div>
					<Button type="submit" className="w-full">
						Start Countdown
					</Button>
				</form>
			</CardContent>
			<CardFooter className="justify-center">
				<div className="grid grid-cols-4 gap-4 text-center">
					<div className="space-y-1">
						<div className="text-4xl font-bold">{countdown.days}</div>
						<div className="text-sm text-muted-foreground">Days</div>
					</div>
					<div className="space-y-1">
						<div className="text-4xl font-bold">{countdown.hours}</div>
						<div className="text-sm text-muted-foreground">Hours</div>
					</div>
					<div className="space-y-1">
						<div className="text-4xl font-bold">{countdown.minutes}</div>
						<div className="text-sm text-muted-foreground">Minutes</div>
					</div>
					<div className="space-y-1">
						<div className="text-4xl font-bold">{countdown.seconds}</div>
						<div className="text-sm text-muted-foreground">Seconds</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
