import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

export function ScrollTriggered() {
	return (
		<div className="min-h-[400vh] bg-white">
			{headings.map((heading, i) => (
				<TextReveal key={i} text={heading.text} index={i} />
			))}
		</div>
	);
}

type TTextRevealProps = {
	text: string;
	index: number;
};

function TextReveal({ text }: TTextRevealProps) {
	return (
		<div className="h-screen flex items-center justify-center perspective-[1000px]">
			<motion.h1
				className="text-7xl md:text-9xl font-bold text-black"
				initial="hidden"
				whileInView="visible"
				exit="exit"
				viewport={{
					amount: 0.5,
					margin: "-20% 0px -20% 0px",
				}}
				variants={textVariants}
				style={{
					transformStyle: "preserve-3d",
					willChange: "transform, opacity",
				}}
			>
				{text}
			</motion.h1>
		</div>
	);
}

const textVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 100,
		scale: 0.8,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1],
			opacity: { duration: 0.6 },
		},
	},
	exit: {
		opacity: 0,
		y: -100,
		scale: 0.8,
		filter: "blur(3px)",
		transition: {
			duration: 0.6,
			ease: [0.64, 0, 0.78, 0],
			opacity: { duration: 0.4 },
		},
	},
};

const headings: { text: string }[] = [
	{ text: "Welcome" },
	{ text: "Scroll" },
	{ text: "Triggered" },
	{ text: "Animations" },
	{ text: "With Skew" },
	{ text: "Effects" },
	{ text: "Keep Going" },
	{ text: "The End" },
];
