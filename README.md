# 🎬 Twitch Stream Credits Scroller

This project is a **React-powered animated credits screen** for Twitch streamers to showcase viewers, supporters, and contributors at the end of a stream — like the end credits of a movie!

It fetches live data from **Streamer.bot** via WebSocket and renders a **scrolling neon-themed credits display**, perfect for OBS integration as a browser source.

---

## 🚀 Features

- 💜 Automatically shows Twitch followers, subs, raids, hype train conductors, and more
- 📡 Real-time WebSocket integration with [Streamer.bot](https://streamer.bot/)
- 🎥 Designed for use in OBS as a browser source
- 🎨 Neon-styled, customizable CSS animations
- ⚙️ Lightweight, no Node.js required — pure HTML + CDN React

---

## 📦 Installation & Setup

> No need to install Node or build anything — just download and run!

### 1 👉 **Clone or Download the Repo**

```bash
git clone https://github.com/yourusername/twitch-credits-scroller.git
cd twitch-credits-scroller
```

Or just download the ZIP and extract it.

### 2 👉 Configure Streamer.bot

- Make sure Streamer.bot is running
- Enable and configure the WebSocket Server
  - Set the WebSocket port and ensure it's accessible locally (e.g., ws://localhost:8080)
  - Allow the app to connect and retrieve credits data

### 3 👉 Edit the Configuration

In the file src/js/config.js, update:

```javascript
export const socketConfig = {
  url: 'ws://localhost', // or your server IP/domain
  port: 8080             // match Streamer.bot WebSocket port - default is 8080
};

export const environment = {
  testing: false // Set to true to simulate credits data without going live
};
```
