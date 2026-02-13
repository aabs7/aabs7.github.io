# GEMINI.md - Project Context: Abhish Khanal's Personal Website

This project is a personal website and blog for Abhish Khanal, a PhD candidate in Computer Science at George Mason University. It is built using Jekyll and hosted on GitHub Pages.

## Project Overview

- **Purpose:** Showcase research publications, share technical notes (blog), and maintain a personal gallery/moments.
- **Main Technologies:** Jekyll (Ruby), Docker (for development), GitHub Actions (for deployment), and `jekyll-scholar` for bibliography management.
- **Theme:** Based on `minima` but heavily customized with bespoke layouts and SASS.

## Project Structure

- `_posts/`: Contains technical blog posts. Naming convention: `YYYY-MM-DD-title.md`.
- `_moments/`: A collection of personal photos.
- `_bibliography/`: Contains `papers.bib`, the source of truth for the publications page.
- `_layouts/`: HTML templates for different page types (`page`, `post`, `bib`, `home`, `gallery`).
- `_includes/`: Reusable HTML components (`header`, `footer`, `head`, `recent_posts`, `category`).
- `_sass/`: Modular SASS files for styling (`_home.scss`, `_blog.scss`, `_publications.scss`, etc.).
- `pages/`: Markdown files for top-level pages like About, Publications, Gallery, and Notes.
- `assets/`: Static assets including images (profile pic, blog diagrams) and PDFs (resume, papers).

## Building and Running

The project uses a `Makefile` to simplify local development using Docker.

### Local Development (Docker)
- **Run the site:** `make serve` (or just `make`). This builds the site and serves it at `http://localhost:4000`.
- The Docker environment uses `ruby:3.3.5-bullseye`.

## Development Conventions

- **Front Matter:** All posts and pages must include YAML front matter. Posts specifically require `layout: post`, `title`, `date`, `categories`, and `slug`.
- **Publications:** Managed via `_bibliography/papers.bib`. Use custom fields like `abbr` for venue tags and `bibtex_show={true}` to toggle BibTeX visibility.
- **Images:** Store blog-related images in `assets/images/blogs/{category}/`.
- **Styles:** Use the modular SASS files in `_sass/` instead of writing large blocks of CSS in `main.scss`.

## CI/CD
- **Deployment:** Automatically handled by GitHub Actions (`.github/workflows/deploy.yml`) when changes are pushed to the main branch.
