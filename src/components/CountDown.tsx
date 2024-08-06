import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";

export default function CountDown() {
	return (
		<Card className="w-full max-w-md mx-auto">
			<CardHeader>
				<CardTitle>Countdown to Your Event</CardTitle>
				<CardDescription>
					Enter your race date and we'll show you the time remaining.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div>
						<Label htmlFor="date">Date</Label>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
