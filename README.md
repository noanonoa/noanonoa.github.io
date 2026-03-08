# Noa Kim's Portfolio (noakim.io)

This is a personal portfolio and blog built with **Jekyll**, hosted on **GitHub Pages**. It serves as a professional landing page showcasing software engineering experience, personal projects, and technical writing.

## 🏗 Project Architecture

The site is built using a static site generation (SSG) workflow:

-   **Framework:** [Jekyll](https://jekyllrb.com/) (Ruby-based).
-   **Content:** Written in **Markdown** (`.md`) with **Front Matter** for metadata.
-   **Templating:** Uses the **Liquid** templating engine for layouts and partials.
-   **Styling:** Modular **SCSS** located in `_sass/`, compiled into a single CSS file.
-   **Deployment:** Automated via **GitHub Actions** (`.github/workflows/github-pages.yml`).

### Directory Structure
-   `_posts/`: Blog entries.
-   `_projects/`: Showcases for individual projects.
-   `_layouts/`: HTML templates (Base, Home, Post, Project).
-   `_includes/`: Reusable components like navigation and headers.
-   `assets/`: Static files (images, custom JS, compiled CSS).

---

## 🎮 Featured: Flappy Bird Remake

One of the "cool" highlights of this portfolio is a vanilla JavaScript remake of **Flappy Bird**, found in `_projects/flappy-bird.md`.

-   **Tech:** HTML5 Canvas API + Vanilla JS.
-   **Logic:** Custom implementation of gravity, collision detection (pipes and ground), and frame-based sprite animation.
-   **Performance:** Optimized with a game loop using `setInterval` (or `requestAnimationFrame`).
-   **Assets:** Custom sprites and sound effects located in `assets/audio/` and `assets/images/`.

---

## 🛠 Local Development Setup

This project uses [mise](https://mise.jdx.dev/) for managing its Ruby development environment.

### 1. Setup Environment
1.  **Install Ruby 4.0.1:**
    ```shell
    mise install ruby@4.0.1
    ```
2.  **Activate & Use:**
    ```shell
    mise use ruby@4.0.1
    ```
3.  **Install Bundler:**
    ```shell
    gem install bundler
    ```

### 2. Running the Site
1.  **Install Dependencies:**
    ```shell
    bundle install
    ```
2.  **Run Jekyll:**
    ```shell
    bundle exec jekyll serve --livereload
    ```
    The site will be available at `http://localhost:4000`.

---

## 🚀 Deployment

The site is automatically built and deployed to GitHub Pages on every push to the `master` branch.

-   **Workflow:** `.github/workflows/github-pages.yml`
-   **Target:** `https://www.noakim.io`

---

## 🧹 Maintenance

To update dependencies to their latest compatible versions for Ruby 4.0.1:

```shell
bundle update --bundler
bundle update
```
