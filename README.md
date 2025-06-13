# Portfolio Website

## Overview
A responsive single-page portfolio website built for the Web Development Internship Assignment. The site showcases a hero section with a spinning 3D cube, about section, projects, and a contact form with validation.

## Technologies Used
- HTML, CSS, JavaScript
- Tailwind CSS (via CDN)
- Three.js (for 3D model integration)
- OrbitControls (for 3D interaction)
- EmailJS (for contact form email sending)

## Deployment
- The site can be deployed on GitHub Pages, Vercel, or Netlify.
- To deploy:
  1. Clone the repository: `git clone https://github.com/sasankkona/portfolio.git`
  2. Serve the files using any static server or open `index.html` directly in a browser.
  3. For GitHub Pages, push the repo and enable Pages from the repository settings.

## 3D Integration
- Method: Three.js
- Location: Hero section
- Description: A spinning 3D cube with OrbitControls allowing rotation and zoom.

## Contact Form Email Sending
- Method: EmailJS
- Setup:
  1. Create an EmailJS account at https://www.emailjs.com/
  2. Add an email service (e.g., Gmail) and note the Service ID.
  3. Create an email template with variables `from_name`, `from_email`, and `message`, and note the Template ID.
  4. Obtain your User ID from the EmailJS dashboard.
  5. Update `js/script.js` with your User ID, Service ID, and Template ID.
- Note: Ensure your EmailJS service and template are active and you have not exceeded request limits.
- Troubleshooting: If email sending fails, check network connectivity, CORS settings, and EmailJS usage limits.

## Setup Instructions
1. Clone the repository: `git clone https://github.com/sasankkona/portfolio.git`
2. Open `index.html` in a modern browser.
3. Ensure internet connection for CDN resources (Tailwind CSS, Three.js, EmailJS).

## Notes
- The contact form includes basic JavaScript validation for empty fields and valid email format.
- The website is fully responsive and tested on desktop and mobile views.
- Images used are placeholders; replace them with your own assets in the `/images` folder.
