# Gemini CLI Instructions - noakim.io

## Technical Constraints
- **Ruby:** 3.3.7 (managed via mise)
- **Jekyll:** 3.10.0 (via github-pages gem)
- **CSS:** Vanilla SCSS (no utility frameworks like Tailwind unless requested)
- **JS:** Vanilla JavaScript (ES6+)
- **Deployment:** GitHub Pages (via master branch)

## General Behavior
- **STOP & WAIT:** Always stop after the "Research/Strategy" phase. Do not
  apply code changes (Act) based on inquiries, observations of bugs, or
  statements of fact until a clear **Directive** (e.g., "Fix it", "Do it",
  "Proceed") is issued.
- **PROPOSE FIRST:** When a problem is identified, explain the cause and
  propose the exact change, then wait for user confirmation.
- **NO UNSOLICITED SUGGESTIONS:** Do not suggest next steps at the end of
  responses.

## Definition of Done
- All features must be verified locally via `bundle exec jekyll serve`.
- Every major change must result in a `gh pr create --draft` with a clear,
  professional summary.
