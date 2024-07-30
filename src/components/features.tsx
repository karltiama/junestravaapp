import React from "react";

export function Features() {
	return (
		<div className="flex justify-evenly py-20 max-w-full bg-slate-500">
			<div>
				<div className="h-24 w-24 bg-red-500"></div>
				<p>Text for Feature 1</p>
			</div>
			<div>
				<div className="h-24 w-24 bg-red-500"></div>
				<p>Text for Feature 2</p>
			</div>
			<div>
				<div className="h-24 w-24 bg-red-500"></div>
				<p>Text for Feature 3</p>
			</div>
		</div>
	);
}
