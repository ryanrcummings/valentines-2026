# Valentine's Day 2026

Interactive "Will you be my Valentine?" website.

**Live URL:** https://valentines.randk.life

## Features
- Cute pink monster image
- "Yes" button triggers confetti + Spotify player
- "No" button dodges the cursor (can't be clicked)
- Mobile friendly
- Custom domain with HTTPS

## Tech Stack
- Static HTML/CSS/JS hosted on GitHub Pages
- Confetti via canvas-confetti CDN
- Spotify embed for music
- Domain DNS via Porkbun (CNAME → ryanrcummings.github.io)

## Key Files
- `index.html` - Main page with all logic
- `style.css` - Styling + mobile responsive
- `monster.png` - The cute monster image
- `CNAME` - Custom domain config

## To Update
```bash
cd /Users/ryancummings/Documents/github/claude/valentines-2026
# make changes
git add . && git commit -m "message" && git push
```

Changes go live automatically within a minute or two.
