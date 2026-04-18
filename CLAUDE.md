# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A mobile-first music player app with 4 tab-based pages (Home, Explore, Library, Profile). Single HTML file (`index.html`) using Tailwind CSS via CDN with vanilla JavaScript for navigation.

## Development

This is a static HTML site with no build step required. Open `index.html` directly in a browser.

**Deployment**: GitHub Pages via `.github/workflows/deploy.yml`. Every push to `main` triggers automatic deployment.

## Architecture

**Tab Navigation**: `switchTab(tabName)` function toggles visibility via CSS classes `.page` and `.page.active`. All pages exist in the DOM simultaneously.

**Design System**: Pencil design file (`home.pen`) defines the component library and variables:
- Colors: `$accent-primary` (#A855F7), `$accent-secondary` (#EC4899), `$accent-tertiary` (#06B6D4), `$surface-card` (#1E1E1E), `$surface-elevated` (#141414), `$surface-inverse` (#0A0A0A)
- Lucide icon font family
- Inter font family

**Tailwind Classes**: Inline Tailwind classes map to design tokens (e.g., `bg-[#A855F7]` for accent, `bg-[#1E1E1E]` for surface-card).

**Page Structure**:
- Status bar (time + icons) — consistent across all pages
- Content area — page-specific
- Fixed bottom tab bar — navigation between 4 tabs

## Pages

| Tab | ID | Content |
|-----|----|---------|
| Home | `page-home` | Greeting, search bar, playlists row, now playing card, song list, mini player |
| Explore | `page-explore` | Search, category tags, featured cards, album grid, rankings |
| Library | `page-library` | Favorites, recently played, playlist grid, local downloads |
| Profile | `page-profile` | User card, stats row, quick actions grid, settings list |
