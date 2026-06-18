let toggleButton;
let nav;
let menu;
let mdMediaQuery;

function setupNavigationMenu() {
	toggleButton = document.getElementById('nav-toggle');
	nav = document.getElementById('nav');
	menu = document.getElementById('nav-menu');
	mdMediaQuery = window.matchMedia('(min-width: 768px)');

  if (!toggleButton || !nav || !menu) return;

	toggleButton.addEventListener('click', toggleMenu);

	menu.addEventListener('click', (e) => {
    const clickedNavLink = e.target.closest('a');

		if (clickedNavLink) {
			resetMenu();
		}
	})

	document.addEventListener('click', (e) => {
		const clickedInsideNav = nav.contains(e.target);

		if (!clickedInsideNav) {
			resetMenu();
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			resetMenu();
		}
	})

	mdMediaQuery.addEventListener('change', handleBreakpointChange);
}

function toggleMenu() {
	if (isOpen()) {
		resetMenu();
	} else {
		openMenu();
	}
}

function isOpen() {
	return toggleButton.getAttribute('aria-expanded') === 'true';
}

function resetMenu() {
	toggleButton.classList.remove('active');
	menu.dataset.open = 'false';
  toggleButton.setAttribute('aria-expanded', false);
}

function openMenu() {
	toggleButton.classList.add('active');
	menu.dataset.open = 'true';
	toggleButton.setAttribute('aria-expanded', true);
}

function handleBreakpointChange(e) {
	if (e.matches) {
		resetMenu();
	}
}

export { setupNavigationMenu };
