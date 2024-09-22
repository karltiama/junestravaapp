import { SiteHeader } from "@/components/site-header";

export default function SuccessLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
		</>
	);
}
