import "./styles/index.css";
import "./styles/App.css";
import Providers from "./providers";
import SiteShell from "./SiteShell";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
	title: "Yantrar — Next-Gen Drone Technology",
	description: "Discover cutting-edge drones for aerial photography, racing, surveying & more. Precision-engineered for professionals and enthusiasts.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<ScrollToTop />
					<SiteShell>{children}</SiteShell>
				</Providers>
			</body>
		</html>
	);
}
