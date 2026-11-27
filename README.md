# Spawn Garage landing page

A public-facing static landing page for the free community project on Spawn. The site contains only the landing page and its assets, not the Garage importer, model files, account data, or server configuration.

## Preview
Open `index.html`, or serve this directory: `python3 -m http.server 8000`. A local web server or HTTPS allows the Copy URL button to use the clipboard.

## Publish on GitHub Pages
Create a public GitHub repository for this site alone, push these files to its default branch, and choose **Settings → Pages → Deploy from a branch → main → /(root)**. Keep `.nojekyll` at the root and leave asset URLs relative so the page works under a repository path. The expected URL for the `nascarjake/spawn-garage-site` repository is `https://nascarjake.github.io/spawn-garage-site/`; the working URL appears in GitHub's Pages settings after a successful build.

## Replace the hero with Savi’s footage
Replace `assets/garage-hero.mp4` with a short, muted H.264 MP4 (roughly 8–12 seconds, 16:9, preferably under 3 MB). Put the car or action on the center-right for the headline, keep UI/private info out of frame, and avoid fast flashes. Replace `assets/garage-poster.webp` with a matching frame. No source code change is required. Motion defaults off when reduced motion or data saving is requested. A viewer can still choose to play it.

## Asset notes
- Hero: excerpt from the creator’s existing Spawn Garage footage; no audio.
- Import panel: cropped actual in-game screenshot, with unrelated status area omitted.
- ModsLocker: cropped public file card for the supported Porsche example, used for identification in the how-to. The car archive itself is not included.
- Assetto World: a clearly labeled link-finding diagram rather than an unverified screenshot.
