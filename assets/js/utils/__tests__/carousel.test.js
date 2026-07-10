// @vitest-environment jsdom

import { beforeEach, describe, it, expect, vi } from "vitest";
import { setupCarousel } from "../carousel";

const HTML_TEMPLATE = `
  <div id="carousel-container" role="region" aria-label="Photo carousel">
    <ul class="carousel__track">
		  <li class="carousel__slide">
			  <img
				  src="slide-1.jpg"
				  alt="Slide 1"
				  loading="eager"
			  >
			</li>
			<li class="carousel__slide">
			  <img
					src="slide-2.jpg"
					alt="Slide 2"
					loading="lazy"
				>
			</li>
			<li class="carousel__slide">
			  <video
          src="clip.mp4"
          type="video/mp4"
          preload="none"
          poster="poster.jpg"
          controls>
			  </video>
			</li>
    </ul>

    <button
		  id="carousel-prev"
			type="button"
			aria-label="Previous slide"
		></button>

		<div
			class="carousel__live-region"
			role="status"
			aria-live="polite"
		></div>

    <button
		  id="carousel-next"
			type="button"
			aria-label="Next slide"
		></button>
	 </div> 
`;

describe("setupCarousel", () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = HTML_TEMPLATE;
    container = document.getElementById("carousel-container");
    setupCarousel(container);
  });

  it("given slide 0, clicking next advances to slide 1", () => {
    document.getElementById("carousel-next").click();
    const slides = container.querySelectorAll(".carousel__slide");

    expect(slides[1].getAttribute("aria-hidden")).toBe("false");
    expect(slides[0].getAttribute("aria-hidden")).toBe("true");
  });

  it("given the last slide, clicking next wraps around to slide 0", () => {
    // advance to last slide
    document.getElementById("carousel-next").click();
    document.getElementById("carousel-next").click();

    // one more click should wrap
    document.getElementById("carousel-next").click();
    const slides = container.querySelectorAll(".carousel__slide");

    expect(slides[0].getAttribute("aria-hidden")).toBe("false");
  });

  it("ArrowRight keydown advances the slide", () => {
    container.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
    const slides = container.querySelectorAll(".carousel__slide");

    expect(slides[1].getAttribute("aria-hidden")).toBe("false");
  });

  it("given slide 0, ArrowLeft keydown wraps to the last slide", () => {
    container.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true }));
    const slides = container.querySelectorAll(".carousel__slide");

    expect(slides[2].getAttribute("aria-hidden")).toBe("false");
  });

  it("a horizontal swipe left advances the slide", () => {
    container.dispatchEvent(new TouchEvent("touchstart", {
      changedTouches: [{ clientX: 200, clientY: 10 }]
    }));
    container.dispatchEvent(new TouchEvent("touchend", {
      changedTouches: [{ clientX: 150, clientY: 12 }]
    }));
    const slides = container.querySelectorAll(".carousel__slide");

    expect(slides[1].getAttribute("aria-hidden")).toBe("false");
  });

  it("a vertical swipe does NOT change the slide", () => {
    container.dispatchEvent(new TouchEvent("touchstart", {
      changedTouches: [{ clientX: 10, clientY: 50 }]
    }));
    container.dispatchEvent(new TouchEvent("touchend", {
      changedTouches: [{ clientX: 12, clientY: 150 }]
    }));
    const slides = container.querySelectorAll(".carousel__slide");

    expect(slides[0].getAttribute("aria-hidden")).toBe("false");
  });
});
