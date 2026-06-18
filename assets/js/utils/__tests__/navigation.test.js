// @vitest-environment jsdom

import { beforeEach, describe, it, expect, vi } from "vitest";
import { setupNavigationMenu } from "../navigation";

const HTML_TEMPLATE = `
  <nav id="nav">
    <ul id="nav-menu" data-open="false">
		  <li>
			  <a href="#Link">Link</a>
			</li>
		</ul>
	  <button id="nav-toggle" aria-expanded="false"></button>
	</nav>
`;

describe("setupNavigationMenu", () => {
  // build the minimum DOM the the function needs
	let breakpointListener;

	beforeEach(() => {
		document.body.innerHTML = HTML_TEMPLATE;

		window.matchMedia = vi.fn().mockImplementation((query) => ({
			addEventListener: vi.fn((event, callback) => {
				if (event === "change") {
					breakpointListener = callback;
				}
			}),
		}));

		setupNavigationMenu();
	});

	it("given a closed menu, when toggle is clicked, then it opens and sets aria-expanded", () => {
		const toggleButton = document.getElementById("nav-toggle");
		const menu = document.getElementById("nav-menu");

		expect(menu.dataset.open).toBe("false");
		expect(toggleButton.getAttribute("aria-expanded")).toBe("false");

		toggleButton.click();
		expect(menu.dataset.open).toBe("true");
		expect(toggleButton.getAttribute("aria-expanded")).toBe("true");

		toggleButton.click();
		expect(menu.dataset.open).toBe("false");
		expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
	});

	it("given an open menu, when Escape key is pressed, then it closes and sets aria-expanded false", () => {
		const toggleButton = document.getElementById("nav-toggle");
		const menu = document.getElementById("nav-menu");

		toggleButton.click();
		expect(menu.dataset.open).toBe("true");

		document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
		expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
		expect(menu.dataset.open).toBe("false");
	});

	it("resets when md breakpoint is matched", () => {
		const toggleButton = document.getElementById("nav-toggle");
		const menu = document.getElementById("nav-menu");

		toggleButton.click();
		expect(menu.dataset.open).toBe("true");

		expect(breakpointListener).toBeTypeOf("function");
		breakpointListener({ matches: true });
		expect(menu.dataset.open).toBe("false");
	});
});
