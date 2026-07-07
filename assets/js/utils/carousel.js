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
  container.addEventListener('touchend', handleTouchEnd);

  goTo(0);
}

function goTo(index) {
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

  // Lazy-load the video ONLY when its slide is active
  const activeSlide = slides[currentIndex];
  const video = activeSlide.querySelector('video');
  if (video && !video.querySelector('source').src) {
    video.querySelector('source').src = activeSlide.dataset.videoSrc;
    video.load();
    video.play();
  }

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
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}

function handleTouchEnd(e) {
  const deltaX = e.changedTouches[0].clientX - touchStartX;
  const deltaY = e.changedTouches[0].clientY - touchStartY;

  const isHorizontalSwipe = Math.abs(deltaX) > 40 && // minimum swipe distance
                            Math.abs(deltaX) > Math.abs(deltaY); // horizontal, not vertical scroll

  if (!isHorizontalSwipe) return;

  deltaX < 0 ? goNext() : goPrev();
}

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
