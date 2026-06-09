# Engineering Standards

Every change must adhere to these standards:

## 1. Test-Driven Development (TDD)
- No feature or bug fix is "done" without a corresponding test or reproduction
  script.
- Verification must be demonstrated via local build logs.

## 2. Accessibility (a11y)
- Every interactive element must have appropriate ARIA labels.
- High color contrast and keyboard navigability are mandatory.

## 3. SEO & Performance
- All pages must have complete metadata (title, description, OG tags) via
  jekyll-seo-tag.
- Images must be optimized (under 300KB); avoid large, uncompressed assets.

## 4. Code Quality
- Prefer Vanilla CSS/SCSS over utility frameworks.
- Maintain a clean SCSS architecture (variables for colors/spacing, limited
  nesting).

## 5. Layouts

### Mobile-First
- All pages, features, styles, and assets must be mobile friendly.
- Every element and styling must be designed mobile-first approach.

### Desktop & Large-sized Display
- The app must be comfortable to view no matter how wide the display may be.
- Always maintain a centered layout with max width (TBD) so content can be easy
  to view and read. Visitors of the page should not have to move their eyes
  from left to right edges of the screen.
