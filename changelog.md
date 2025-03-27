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

## [0.0.2] - 2025-03-28

### Added

- Added a config.js file for easier setup
  - CSS styles can now be defined in the config.js file
  - Image source and size can be set in the config.js file
- Updated JSDoc comments for better clarity and type inference in supported editors
