export default function DashboardLoading() {
	return (
		<div className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16">
			<div className="space-y-4 md:space-y-6 lg:space-y-8">
				<div className="text-center">
					<div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4 md:h-10"></div>
					<div className="h-4 bg-gray-200 rounded w-2/4 mx-auto md:h-6"></div>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
					<div className="grid gap-4 md:col-span-2 lg:gap-6">
						{/* Overall Stats Skeleton */}
						<div className="w-full bg-white shadow-sm rounded-lg p-6">
							<div className="flex flex-row items-center justify-between mb-4">
								<div className="h-6 bg-gray-200 rounded w-1/4"></div>
								<div className="h-4 bg-gray-200 rounded w-1/4"></div>
								<div className="h-10 w-10 bg-gray-200 rounded-full"></div>
							</div>
							<div className="space-y-4">
								<div className="h-4 bg-gray-200 rounded w-1/2"></div>
								<div className="h-4 bg-gray-200 rounded w-3/4"></div>
								<div className="h-4 bg-gray-200 rounded w-1/2"></div>
							</div>
						</div>
						{/* Monthly Running and Biking Chart Skeleton */}
						<div className="w-full bg-white shadow-sm rounded-lg p-6">
							<div className="h-6 bg-gray-200 rounded w-2/4 mb-4"></div>
							<div className="h-60 bg-gray-200 rounded"></div>
							<div className="mt-4 space-y-2">
								<div className="h-4 bg-gray-200 rounded w-1/3"></div>
								<div className="h-4 bg-gray-200 rounded w-1/2"></div>
							</div>
						</div>
					</div>
					{/* Recent Activities Skeleton */}
					<div className="w-full md:col-span-2 lg:col-span-1">
						<div className="h-6 bg-gray-200 rounded w-2/4 mb-4"></div>
						<div className="space-y-4">
							{Array.from({ length: 4 }).map((_, index) => (
								<div key={index} className="bg-white shadow-sm rounded-lg p-4">
									<div className="flex items-center justify-between mb-4">
										<div className="space-y-2">
											<div className="h-4 bg-gray-200 rounded w-3/4"></div>
											<div className="h-4 bg-gray-200 rounded w-1/2"></div>
										</div>
										<div className="h-8 w-8 bg-gray-200 rounded-full"></div>
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div className="h-4 bg-gray-200 rounded w-3/4"></div>
										<div className="h-4 bg-gray-200 rounded w-3/4"></div>
										<div className="h-4 bg-gray-200 rounded w-3/4"></div>
										<div className="h-4 bg-gray-200 rounded w-3/4"></div>
									</div>
								</div>
							))}
						</div>
						{/* Pagination Skeleton */}
						<div className="flex justify-center m-4">
							{Array.from({ length: 5 }).map((_, index) => (
								<div
									key={index}
									className="px-4 py-2 mx-1 border rounded bg-gray-200 h-8 w-8"></div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
