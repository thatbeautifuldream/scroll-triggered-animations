import { createFileRoute } from "@tanstack/react-router";
import ScrollVideoScrubber from "@/components/ScrollVideoScrubber";

export const Route = createFileRoute("/")({
	component: () => (
		<ScrollVideoScrubber videoSrc="/videos/shot-drone-10s-20s.mp4" />
	),
});
