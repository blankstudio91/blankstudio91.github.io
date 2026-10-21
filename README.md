# Blank Studio website

Plain HTML, CSS and JavaScript. No build step, nothing to install.
Double-click `index.html` to open it in your browser.

Live address (once published): https://blankstudio91.github.io

## Files

| File | What it is |
|---|---|
| `index.html` | Home: hero, apps index, TrackLore and ChessCapture showcases, "Coming Soon" exhibit |
| `tracklore.html` | TrackLore app page |
| `about.html` | About + contact |
| `support.html` | TrackLore support, privacy policy and terms of use |
| `chesscapture.html` | ChessCapture app page |
| `chesscapture-support.html` | ChessCapture support, privacy policy and terms of use |
| `css/styles.css` | All styling. Light and dark colors are the variables at the top |
| `js/theme.js` | Dark mode toggle (remembers the choice across pages) |
| `images/` | Blank Studio logo (SVG), favicon, share image, app icons and screenshots |

## Still to do

- Contact forms on `about.html`, `support.html` and `chesscapture-support.html` are visual only. See the comment above each `<form>` tag to connect it to Formspree.
- ChessCapture App Store link: replace `href="#"` on the "Download on the App Store" buttons in `chesscapture.html` (2) and `index.html` (1). Search for `TODO`.
- ChessCapture support email: replace `[SUPPORT EMAIL]` in `chesscapture-support.html` (2 places).
- Optional: swap the "Download on the App Store" text buttons for Apple's official badge.

## Updating the live site

1. Edit the file(s) here.
2. On GitHub, open the `blankstudio91.github.io` repository → **Add file → Upload files**.
3. Drag in the changed file(s), keeping the same folder (e.g. `css/styles.css` goes inside `css/`).
4. Click **Commit changes**. The site updates within a minute or two.

## Adding a new app

1. **index.html → Apps index**: change the "Untitled / Coming soon" row to the app's name and link, and add a new "Untitled" row numbered one higher.
2. **index.html → showcase**: copy the ChessCapture `<section>` block, paste it above the exhibit, and change its text, icon, screenshot and colors.
3. **index.html → exhibit**: bump the number in the eyebrow, the plaque and the wall label (e.g. "No. 03" → "No. 04").
4. Copy `chesscapture.html` to `newapp.html` and rewrite it.
5. Copy `chesscapture-support.html` to `newapp-support.html` and rewrite its FAQ, privacy policy and terms.
6. Add the new app to the `app-switch` links at the top of every support page, and to the footers.

## App Store Connect URLs

TrackLore:

- Support URL: `https://blankstudio91.github.io/support.html`
- Privacy Policy URL: `https://blankstudio91.github.io/support.html#privacy`
- Terms of Use URL (for the app description or License Agreement link): `https://blankstudio91.github.io/support.html#terms`

ChessCapture:

- Support URL: `https://blankstudio91.github.io/chesscapture-support.html`
- Privacy Policy URL: `https://blankstudio91.github.io/chesscapture-support.html#privacy`
- Terms of Use URL: `https://blankstudio91.github.io/chesscapture-support.html#terms`
