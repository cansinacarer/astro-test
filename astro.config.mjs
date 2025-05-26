// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://astro-test.cansin.net",
	base: "/",

	markdown: {
		layouts: {
			default: "./src/layouts/Layout.astro",
			// blog: "./src/layouts/BlogLayout.astro", // You can also create specific layouts
		},
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "github-light",
			wrap: true,
			langs: [
				"javascript",
				"typescript",
				"css",
				"html",
				"json",
				"markdown",
			],
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
