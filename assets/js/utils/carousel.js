let slides;
let track;
let liveRegion;
let totalSlides;
let currentIndex = 0;
let touchStartX = 0;
let touchStartY = 0;

function setupCarousel(container) {
  if (!container) return;

  track = container.querySelector('.carousel__track');
  slides = [...container.querySelectorAll('.carousel__slide')];
  liveRegion = container.querySelector('.carousel__live-region');
  totalSlides = slides.length;

  container.querySelector('#carousel-prev').addEventListener('click', goPrev);
  container.querySelector('#carousel-next').addEventListener('click', goNext);
  container.addEventListener('keydown', handleKeydown);
  container.addEventListener('touchstart', handleTouchStart, { passive: true });
  container.addEventListener('touchend', handleTouchEnd, { passive: true });

  goTo(0);
}

function goTo(index) {
  // Pause video when leaving
  const leavingVideo = slides[currentIndex]?.querySelector('video');
  if (leavingVideo) leavingVideo.pause();

  // Wrap around (last -> first, first -> last)
  currentIndex = (index + totalSlides) % totalSlides;

  // Slide the track with CSS transform
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Hide inactive slides from screen readers
  slides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', i !== currentIndex);
  });

  // Announce to screen readers via live region
  liveRegion.textContent = `${currentIndex + 1} / ${totalSlides}`;

  // Prefetch the NEXT slide's image in the background
  prefetchNext(currentIndex);
}

function goNext() {
  goTo(currentIndex + 1);
}
function goPrev() {
  goTo(currentIndex - 1);
}

function handleTouchStart(e) {
  // Ignore multi-touch gestures (pinch-to-zoom) — null signals an invalid start
  if (e.touches.length > 1) {
    touchStartX = null;
    return;
  }
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}

function handleTouchEnd(e) {
  // Multi-touch gesture was started — bail out
  if (touchStartX === null) return;

  // Don't intercept panning while the user has zoomed in
  const isZoomed = window.visualViewport
    ? window.visualViewport.scale > 1
    : document.documentElement.clientWidth < window.innerWidth;
  if (isZoomed) return;

  const deltaX = e.changedTouches[0].clientX - touchStartX;
  const deltaY = e.changedTouches[0].clientY - touchStartY;

  const isHorizontalSwipe = Math.abs(deltaX) > 40 && // minimum swipe distance
                            Math.abs(deltaX) > Math.abs(deltaY); // horizontal, not vertical scroll

  if (!isHorizontalSwipe) return;

  deltaX < 0 ? goNext() : goPrev();
}

// Preloads next slide image to prevent blank/flashing
function prefetchNext(index) {
  const nextSlide = slides[(index + 1) % totalSlides];
  const img = nextSlide?.querySelector('img');
  if (!img || img.complete) return; // already cached, skip

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'image';
  link.href = img.src;
  document.head.appendChild(link);
}

function handleKeydown(e) {
  const keyActions = {
    ArrowRight: goNext,
    ArrowLeft: goPrev
  }
  keyActions[e.key]?.();
}

export { setupCarousel };
