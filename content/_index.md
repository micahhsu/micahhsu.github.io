---
# Leave the homepage title empty to use the site title
title: ""
date: 2024-6-30
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download Résumé
        url: uploads/Micah Hsu Resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: Sather Gate.jpg
          filters:
            brightness: 0.8
          size: cover
          position: center
          parallax: false

---
