import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
	ChartTooltipContent,
	ChartTooltip,
	ChartContainer,
} from "@/components/ui/chart";

export default function Dashboard({
	firstName,
}: // profilePicture,
// created_at,
{
	firstName: string;
	// profilePicture: string;
	// created_at: string;
}) {
	return (
		<div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
			<div className="space-y-4 md:space-y-6 lg:space-y-8">
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
						{`Welcome back to your Dashboard ${firstName}!`}
					</h1>
					<p className="mt-3 text-lg text-muted-foreground md:mt-5 md:text-xl lg:text-base xl:text-lg">
						Manage your business with ease.
					</p>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
					<div className="grid gap-4 md:col-span-2 lg:gap-6">
						<Card className="w-full">
							<CardHeader>
								<CardTitle>Overall Stats</CardTitle>
								<CardDescription>
									A summary of your overall business performance.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid gap-4">
									<div className="grid grid-cols-2 items-center gap-2">
										<div className="text-muted-foreground">Total Sales</div>
										<div className="text-2xl font-bold">$12,345</div>
									</div>
									<div className="grid grid-cols-2 items-center gap-2">
										<div className="text-muted-foreground">
											Avg. Order Value
										</div>
										<div className="text-2xl font-bold">$45</div>
									</div>
									<div className="grid grid-cols-2 items-center gap-2">
										<div className="text-muted-foreground">Conversion Rate</div>
										<div className="text-2xl font-bold">3.2%</div>
									</div>
								</div>
							</CardContent>
						</Card>
						<Card className="w-full">
							<CardHeader>
								<CardTitle>Sales Chart</CardTitle>
								<CardDescription>
									A chart showing your sales performance.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<LinechartChart className="aspect-[4/3]" />
							</CardContent>
						</Card>
					</div>
					<Card className="w-full md:col-span-2 lg:col-span-1">
						<CardHeader>
							<CardTitle>Recent Orders</CardTitle>
							<CardDescription>
								A list of your most recent orders.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-3">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<img
											src="/placeholder.svg"
											width={48}
											height={48}
											alt="Product Image"
											className="rounded-md"
											style={{ aspectRatio: "48/48", objectFit: "cover" }}
										/>
										<div>
											<div className="font-medium">Product Name</div>
											<div className="text-sm text-muted-foreground">
												Order #123
											</div>
										</div>
									</div>
									<div className="text-lg font-bold">$25</div>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<img
											src="/placeholder.svg"
											width={48}
											height={48}
											alt="Product Image"
											className="rounded-md"
											style={{ aspectRatio: "48/48", objectFit: "cover" }}
										/>
										<div>
											<div className="font-medium">Product Name</div>
											<div className="text-sm text-muted-foreground">
												Order #124
											</div>
										</div>
									</div>
									<div className="text-lg font-bold">$35</div>
								</div>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<img
											src="/placeholder.svg"
											width={48}
											height={48}
											alt="Product Image"
											className="rounded-md"
											style={{ aspectRatio: "48/48", objectFit: "cover" }}
										/>
										<div>
											<div className="font-medium">Product Name</div>
											<div className="text-sm text-muted-foreground">
												Order #125
											</div>
										</div>
									</div>
									<div className="text-lg font-bold">$45</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

function LinechartChart(props) {
	return (
		<div {...props}>
			<ChartContainer
				config={{
					desktop: {
						label: "Desktop",
						color: "hsl(var(--chart-1))",
					},
				}}>
				<LineChart
					accessibilityLayer
					data={[
						{ month: "January", desktop: 186 },
						{ month: "February", desktop: 305 },
						{ month: "March", desktop: 237 },
						{ month: "April", desktop: 73 },
						{ month: "May", desktop: 209 },
						{ month: "June", desktop: 214 },
					]}
					margin={{
						left: 12,
						right: 12,
					}}>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="month"
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						tickFormatter={(value) => value.slice(0, 3)}
					/>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
					/>
					<Line
						dataKey="desktop"
						type="natural"
						stroke="var(--color-desktop)"
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	);
}
