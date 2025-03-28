# 📜 Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2025-03-27

### 🎉 Added

- Initial release of **Twitch Stream Credits Scroller**
- React-powered animated credits screen using CDN + Babel
- Live WebSocket integration with Streamer.bot
- Dynamic parsing of Twitch credit data from all sections
- Auto-scrolling credits animation (intro → users → outro)
- Neon-themed, fully customizable CSS visuals
- OBS-ready as a browser source
- Simple config system for local/production modes
- Fallback for test mode without going live

### 🛠️ Infrastructure

- React via CDN (no build or Node.js required)
- Babel for JSX support inline in HTML
- Designed for lightweight deployment and local OBS usage

---

## [1.0.1] - 2025-03-27

### Added

- Added a `config.js` file for easier setup
  - CSS styles can now be defined in the `config.js` file
  - Image source and size can be set in the `config.js` file
- Updated JSDoc comments for better clarity and type inference in supported editors

## [1.0.2] - 2025-03-27

### Added

- Added a visibility toggle for individual credits sections in `config.js` with **JSDoc** comments
- The overlay now shows each section name in a heading instead of hyphenating all of the section entry names
- Added a custom property in `index.css` for the heading font
- Adjusted whitespacing

## [1.0.3] - 2025-03-27

### Added

- Updates to README pertaining to Streamer.bot integration

## [1.0.4] - 2025-03-27

### Added

- Decreased render time!
- New fonts from [Fontawesome](https://fontawesome.com) for section headings
- Removes glow from credits title
- Offsets glow animations slightly for better effect

## [1.1.0] - 2025-03-28

### Changes

- All modifiable style declarations have been moved to `config.js`. Modifications of any values in `index.css` may break the animation.
- Some classes were renamed for better semantics
- README updated to reflect changes
