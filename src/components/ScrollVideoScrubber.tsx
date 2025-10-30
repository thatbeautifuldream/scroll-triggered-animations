import { scroll } from "motion";
import { useEffect, useRef } from "react";

type TScrollVideoScrubberProps = {
	videoSrc: string;
};

export default function ScrollVideoScrubber({
	videoSrc,
}: TScrollVideoScrubberProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		// Pause the video initially
		video.pause();

		// Scrub through the video on scroll (entire document)
		const stopScroll = scroll((progress: number) => {
			if (video.readyState) {
				video.currentTime = video.duration * progress;
			}
		});

		// Cleanup
		return () => {
			if (stopScroll) stopScroll();
		};
	}, []);

	return (
		<div className="relative min-h-[300vh]">
			<div className="fixed top-0 left-0 w-full h-screen -z-10">
				<video
					ref={videoRef}
					src={videoSrc}
					className="w-full h-full object-cover"
					muted
					playsInline
					preload="auto"
				/>
			</div>
		</div>
	);
}
