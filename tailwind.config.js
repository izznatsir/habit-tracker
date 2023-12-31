import { lime, stone } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.vue"],
	darkMode: "class",
	theme: {
		colors: {
			lime,
			stone,
		},
		extend: {
			colors: {
				focus: {
					DEFAULT: "var(--color-focus)",
				},
				neutral: {
					bg: "var(--color-neutral-bg)",
					"bg-subtle": "var(--color-neutral-bg-subtle)",
					border: "var(--color-neutral-border)",
					"border-subtle": "var(--color-neutral-border-subtle)",
					"interactive-bg": "var(--color-neutral-interactive-bg)",
					"interactive-bg-hover": "var(--color-neutral-interactive-bg-hover)",
					"interactive-bg-muted": "var(--color-neutral-interactive-bg-muted)",
					"interactive-border": "var(--color-neutral-interactive-border)",
					"interactive-border-hover":
						"var(--color-neutral-interactive-border-hover)",
					text: "var(--color-neutral-text)",
					"text-contrast": "var(--color-neutral-text-contrast)",
					"text-muted": "var(--color-neutral-text-muted)",
				},
			},
		},
	},
	plugins: [],
};
