# Gellyball & Low-Impact Tactical Gaming Arena

A premium, modern, responsive HTML5 website template designed for a "Gellyball & Low-Impact Tactical Gaming Arena" business. It features a futuristic tactical gaming aesthetic with a minimalist million-dollar UI design.

## Features

*   **Premium Minimalist Interface**: Clean layouts with large modern typography (Orbitron and Inter fonts).
*   **Tactical Gaming Visuals**: Neon glow accents, dark cinematic backgrounds, and glassmorphism UI cards.
*   **Mobile-First Responsive Design**: Perfect responsiveness across mobile, tablet, and desktop viewports.
*   **Dark & Light Mode**: Built-in toggle to switch between themes.
*   **RTL Support**: HTML attribute `dir="ltr"` ready to be switched to `rtl`.
*   **Smooth Animations**: Scroll reveal animations, animated counters, hover glow effects.
*   **SEO Optimized**: Semantic HTML5 structure.

## Technology Stack

*   HTML5
*   TailwindCSS (via CDN for zero-configuration development)
*   Vanilla JavaScript
*   Custom Vanilla CSS (for glassmorphism, scrollbars, and specific glows)

## Pages Included

1.  **Home Page 1** (`index.html`) - 6 Sections
2.  **Home Page 2** (`index-2.html`) - 6 Sections
3.  **About Us** (`pages/about.html`) - 4 Sections
4.  **Services** (`pages/services.html`) - 4 Sections
5.  **Service Details** (`pages/service-details.html`) - 4 Sections
6.  **Blog** (`pages/blog.html`) - 4 Sections
7.  **Blog Details** (`pages/blog-details.html`) - 4 Sections
8.  **Pricing** (`pages/pricing.html`) - 4 Sections
9.  **Contact Us** (`pages/contact.html`) - 4 Sections
10. **Booking** (`pages/booking.html`) - 4 Sections
11. **404 Page** (`pages/404.html`) - 4 Sections
12. **Coming Soon Page** (`pages/coming-soon.html`) - 4 Sections

## File Structure

```
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   └── fonts/
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── service-details.html
│   ├── blog.html
│   ├── blog-details.html
│   ├── pricing.html
│   ├── contact.html
│   ├── booking.html
│   ├── 404.html
│   └── coming-soon.html
├── index.html
├── index-2.html
└── README.md
```

## How to Use

1.  Open `index.html` in any modern web browser to view the site locally.
2.  All assets are loaded via relative paths, so it works perfectly without a local server.
3.  To modify styles, you can edit the Tailwind classes in the HTML files, or adjust the CSS variables and custom classes in `assets/css/style.css`.
4.  To toggle Light mode by default, change the local storage logic in `assets/js/main.js` or add the `light-mode` class to the `<body>` element.
