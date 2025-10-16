# Capstone Project Website

A simple static website for hosting capstone project information including team members, reports, and GitHub repository links.

## Quick Start

1. Edit `index.html` to add your project information
2. Open `index.html` in a web browser to view locally
3. Deploy to GitHub Pages or your preferred hosting platform

## Customization Guide

### Update Project Name and Pronunciation

In `index.html`, find and replace:
- `[Your Project Name]` with your actual project name
- `[pronunciation guide]` with how to pronounce your project name (e.g., "no-ISH-oos")

### Add Team Members

In the Team Members section, edit or add team member cards:

```html
<div class="team-member">
    <h3>Member Name</h3>
    <p class="role">Role/Responsibility</p>
    <p class="contact">email@example.com</p>
</div>
```

### Add Reports

Update the Reports section with your actual reports:

```html
<div class="report-item">
    <h3>Report Title</h3>
    <p class="date">Date: October 16, 2025</p>
    <a href="path/to/report.pdf" class="btn">View Report</a>
</div>
```

You can either:
- Link to external URLs (Google Drive, Dropbox, etc.)
- Place PDF files in a `reports/` folder and link to them

### Add GitHub Repositories

Update the repository links:

```html
<div class="repo-item">
    <h3>Repository Name</h3>
    <p>Description of the repository</p>
    <a href="https://github.com/username/repo" class="btn" target="_blank">View on GitHub</a>
</div>
```

### Update Project Description

Edit the "About the Project" section with your actual project details, goals, and technologies used.

## Deployment Options

### Option 1: GitHub Pages

1. Create a new repository on GitHub
2. Push these files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be available at `https://username.github.io/repository/`

### Option 2: Custom Domain

If you have a custom domain:
1. Follow GitHub Pages setup above
2. Add a `CNAME` file with your domain name
3. Configure DNS settings with your domain provider

### Option 3: Other Static Hosting

This website can be deployed to any static hosting service:
- Netlify (drag and drop deployment)
- Vercel
- GitHub Pages
- GitLab Pages
- Firebase Hosting

## File Structure

```
.
├── index.html          # Main HTML file
├── style.css          # Styling
└── README.md          # This file
```

## Features

- Responsive design (mobile-friendly)
- Modern gradient color scheme
- Smooth hover effects
- Clean, professional layout
- Easy to customize

## Color Scheme

The website uses a purple gradient theme. To change colors, edit `style.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Dark sections: `#2c3e50`
- Light backgrounds: `#f8f9fa`

## License

Feel free to use and modify this template for your capstone project.
# noissues-webpage
