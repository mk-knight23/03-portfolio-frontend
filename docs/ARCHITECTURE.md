# Architecture: 03-studio-site

## Overview
A high-fidelity creative agency landing page built with Vanilla TypeScript and Vite 6. The architecture is centered around a scroll-centric motion system using GSAP and Locomotive Scroll.

## Tech Stack
-   **Framework**: Vanilla TypeScript
-   **Build Tool**: Vite 6
-   **Animation Engine**: GSAP (GreenSock Animation Platform)
-   **Smooth Scrolling**: Locomotive Scroll v5
-   **Styling**: CSS (Modern Utility-First Approach)

## Key Technical Systems
-   **Motion Lifecycle**: GSAP timelines synchronized with Locomotive Scroll via `ScrollTrigger.scrollerProxy`.
-   **Interactive Elements**: Advanced cursor tracking and SVG-driven micro-interactions.
-   **Media Handling**: Self-hosted video assets and lazy-loaded high-resolution imagery.

## Performance Optimization
-   GSAP `will-change` hints for hardware-accelerated transforms.
-   Locomotive Scroll's passive event listeners for smooth 60fps scrolling.
-   Vite-optimized asset bundling.
