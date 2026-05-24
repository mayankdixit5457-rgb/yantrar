"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Renders Header + <main> + Footer for public routes.
 * For /admin/* routes it renders children directly so the
 * admin sidebar layout owns the full viewport.
 */
export default function SiteShell({ children }) {
	const pathname = usePathname();
	const isAdmin = pathname?.startsWith("/admin");

	if (isAdmin) return <>{children}</>;

	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
