"use client";

import React from "react";
import Image from "next/image";

type Badge = {
	src: string;
	alt: string;
	top: string;
	left: string;
	speed?: "fast" | "normal" | "slow";
	scale?: number; // visual normalization without changing container bg
};

const BADGES: Badge[] = [
	{ src: "/languages/javascript.svg", alt: "JavaScript", top: "12%", left: "48%", speed: "normal", scale: 1.15 },
	{ src: "/languages/typescript.svg", alt: "TypeScript", top: "18%", left: "78%", speed: "slow", scale: 1.0 },
	{ src: "/languages/python.svg", alt: "Python", top: "32%", left: "12%", speed: "fast", scale: 1.05 },
	{ src: "/languages/c-plus-plus.svg", alt: "C++", top: "6%", left: "8%", speed: "normal", scale: 1.0 },
	{ src: "/languages/java.svg", alt: "Java", top: "44%", left: "68%", speed: "normal", scale: 1.0 },
	{ src: "/languages/go.svg", alt: "Go", top: "56%", left: "8%", speed: "slow", scale: 1.0 },
	{ src: "/languages/rust.svg", alt: "Rust", top: "70%", left: "32%", speed: "fast", scale: 1.15 },
	{ src: "/languages/ruby.svg", alt: "Ruby", top: "22%", left: "24%", speed: "normal", scale: 1.15 },
	{ src: "/languages/php.svg", alt: "PHP", top: "76%", left: "74%", speed: "slow", scale: 1.2 },
	{ src: "/languages/swift.svg", alt: "Swift", top: "62%", left: "56%", speed: "normal", scale: 1.1 },
	{ src: "/languages/kotlin.svg", alt: "Kotlin", top: "36%", left: "86%", speed: "fast", scale: 1.0 },
	{ src: "/languages/nodejs.svg", alt: "Node.js", top: "8%", left: "90%", speed: "normal", scale: 1.1 },
];

function speedClass(s?: Badge["speed"]) {
	switch (s) {
		case "fast":
			return "animate-float-fast";
		case "slow":
			return "animate-float-slow";
		default:
			return "animate-float";
	}
}

export default function Background() {
	return (
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
		>
			{/* subtle vignette */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />

			{BADGES.map((b, i) => (
				<span
					key={`${b.alt}-${i}`}
					className={[
						"absolute inline-flex items-center justify-center rounded-2xl border border-[#2A2A2A]",
						"px-4 py-4 shadow-md backdrop-blur-[2px] bg-[#1C1C1C]",
						speedClass(b.speed),
					].join(" ")}
					style={{ top: b.top, left: b.left }}
				>
					<div
						className="flex items-center justify-center"
						style={{ transform: `scale(${b.scale ?? 1})` }}
					>
						<Image
							src={b.src}
							alt={b.alt}
							width={40}
							height={40}
							className="h-10 w-10 object-contain drop-shadow-[0_0_6px_rgba(0,0,0,0.45)] contrast-125"
							priority={false}
						/>
					</div>
				</span>
			))}
		</div>
	);
}

