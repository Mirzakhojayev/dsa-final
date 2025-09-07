"use client";

import React from "react";

type Badge = {
	label: string;
	bg: string;
	fg: string;
	top: string; 
	left: string; 
	speed?: "fast" | "normal" | "slow";
};

const BADGES: Badge[] = [
	{ label: "JS", bg: "#f7df1e", fg: "#111111", top: "6%", left: "8%", speed: "normal" },
	{ label: "TS", bg: "#3178c6", fg: "#ffffff", top: "18%", left: "78%", speed: "slow" },
	{ label: "Python", bg: "#3673a5", fg: "#ffd43b", top: "32%", left: "12%", speed: "fast" },
	{ label: "C++", bg: "#00599c", fg: "#ffffff", top: "12%", left: "48%", speed: "normal" },
	{ label: "Java", bg: "#f89820", fg: "#111111", top: "44%", left: "68%", speed: "normal" },
	{ label: "Go", bg: "#00add8", fg: "#083344", top: "56%", left: "8%", speed: "slow" },
	{ label: "Rust", bg: "#000000", fg: "#f97316", top: "70%", left: "32%", speed: "fast" },
	{ label: "Ruby", bg: "#cc342d", fg: "#ffffff", top: "22%", left: "24%", speed: "normal" },
	{ label: "PHP", bg: "#777bb3", fg: "#0b1021", top: "76%", left: "74%", speed: "slow" },
	{ label: "Swift", bg: "#ff6f00", fg: "#111111", top: "62%", left: "56%", speed: "normal" },
	{ label: "Kotlin", bg: "#7f52ff", fg: "#ffffff", top: "36%", left: "86%", speed: "fast" },
	{ label: "Node", bg: "#3c873a", fg: "#eaffea", top: "8%", left: "90%", speed: "normal" },
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
			className="pointer-events-none absolute inset-0 overflow-hidden select-none"
		>
			{/* subtle vignette */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />

			{BADGES.map((b, i) => (
				<span
					key={`${b.label}-${i}`}
					className={[
						"absolute inline-flex items-center gap-2 rounded-full border border-white/10",
						"px-3 py-1 text-xs font-medium shadow-md backdrop-blur-[2px]",
						"opacity-70 hover:opacity-90 transition-opacity",
						speedClass(b.speed),
					].join(" ")}
					style={{
						top: b.top,
						left: b.left,
						backgroundColor: `${b.bg}20`,
						color: b.fg,
					}}
				>
					{/* dot */}
					<span
						className="inline-block h-2 w-2 rounded-full"
						style={{ backgroundColor: b.bg }}
					/>
					{b.label}
				</span>
			))}
		</div>
	);
}

