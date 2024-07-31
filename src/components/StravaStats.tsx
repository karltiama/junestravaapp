import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const StravaStats = ({
	firstname,
	profilePicture,
}: {
	firstname: string;
	profilePicture?: string;
}) => {
	return (
		<div className="">
			<Card className="w-[350px]">
				<CardHeader className="flex">
					<CardTitle>{firstname}</CardTitle>
					{/* Add Avatar */}
					<Avatar>
						<AvatarImage src={profilePicture} />
						<AvatarFallback>KT</AvatarFallback>
					</Avatar>
				</CardHeader>
				<CardContent>Test</CardContent>
			</Card>
		</div>
	);
};

export default StravaStats;
