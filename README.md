# Blank Studio website

Plain HTML, CSS and JavaScript. No build step, nothing to install.
Double-click `index.html` to open it in your browser.

Live address (once published): https://blankstudio91.github.io

## Files

| File | What it is |
|---|---|
| `index.html` | Home: hero, apps index, TrackLore showcase, "Coming Soon" exhibit |
| `tracklore.html` | TrackLore app page |
| `about.html` | About + contact |
| `support.html` | TrackLore support + privacy policy |
| `css/styles.css` | All styling. Light and dark colors are the variables at the top |
| `js/theme.js` | Dark mode toggle (remembers the choice across pages) |
| `images/` | App icon and favicon |

## Still to do

- Contact form on `about.html` is visual only. See the comment above the `<form>` tag to connect it to Formspree.
- Optional: swap the "Download on the App Store" text buttons for Apple's official badge.

## Updating the live site

1. Edit the file(s) here.
2. On GitHub, open the `blankstudio91.github.io` repository → **Add file → Upload files**.
3. Drag in the changed file(s), keeping the same folder (e.g. `css/styles.css` goes inside `css/`).
4. Click **Commit changes**. The site updates within a minute or two.

## Adding a new app

1. **index.html → Apps index**: change row 02 from "Untitled / Coming soon" to the app's name, and add a new "03 Untitled" row.
2. **index.html → showcase**: copy the TrackLore `<section>` block, paste it above the exhibit, and change its text, icon and colors.
3. **index.html → exhibit**: change "No. 02" to "No. 03" in the plaque and wall label.
4. Copy `tracklore.html` to `newapp.html` and rewrite it.
5. Add its support page and an `<option>` for it in the app picker on `support.html`.

## App Store Connect URLs

- Support URL: `https://blankstudio91.github.io/support.html`
- Privacy Policy URL: `https://blankstudio91.github.io/support.html#privacy`
