import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export function LoginInfo({
	firstName,
	profilePicture,
	created_at,
}: {
	firstName: string;
	profilePicture: string;
	created_at: string;
}) {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};

	return (
		<Card className=" mx-auto w-full max-w-[450px] lg:max-w-[1000px]">
			<CardHeader className="flex flex-row items-center justify-around">
				<div>
					<CardTitle>{`Welcome back ${firstName}!`}</CardTitle>
					<CardDescription>{`Joined Strava: ${formatDate(
						created_at
					)}`}</CardDescription>
				</div>
				<Avatar>
					<AvatarImage src={profilePicture} />
					<AvatarFallback>KT</AvatarFallback>
				</Avatar>
			</CardHeader>
		</Card>
	);
}
