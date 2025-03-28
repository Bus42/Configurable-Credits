# 🎬 Twitch Stream Credits Scroller

![scrolling credits demo](https://res.cloudinary.com/studio42-web-development/image/upload/v1743114856/Gaming/htvkza20gzhyennrmsgw.gif)

This project is a **React-powered animated credits screen** for Twitch streamers to showcase viewers, supporters, and contributors at the end of a stream — like the end credits of a movie!

It fetches live data from **Streamer.bot** via WebSocket and renders a **scrolling neon-themed credits display**, perfect for OBS integration as a browser source.

By default, the font sizes are optimized for 1080p full-screen. I've set it up to be responsive so you can drag it to any size you need. Font and image sizes can be further adjusted in `config.js`

```javascript
const textConfig = {
    containerStyle: {
        font: '600 60px / 1 var(--wrapper-color) , sans-serif',
    },
    introText: 'Thanks for watching!',
    outroText: 'So long, and thanks for all the fish!',
    titleStyle: {
        fontFamily: 'var(--title-font)',
        fontSize: 80,
        animation: 'headShake 2s infinite ease-in-out',
    },
 ...   
```

---

## 🚀 Features

- 💜 Automatically shows Twitch followers, subs, raids, hype train conductors, and more
- 📡 Real-time WebSocket integration with [Streamer.bot](https://streamer.bot/)
- 🎥 Designed for use in OBS as a browser source
- 🎨 Neon-styled, customizable CSS animations
- ⚙️ Lightweight, no Node.js required — pure HTML + CDN React

## Planned Features

- Custom properties for font sizes in index.css
- Consolidated style configuration
- UI for configuration without a text editor

---

## 📦 Installation & Setup

> No need to install Node or build anything — just download and run!

### 1 👉 **Clone or Download the Repo**

```bash
git clone https://github.com/Bus42/twitch-credits-scroller.git
cd twitch-credits-scroller
```

Or just download the ZIP and extract it.

### 2 👉 Configure Streamer.bot

- Make sure Streamer.bot is running
- Enable and configure the WebSocket Server
  - Set the WebSocket port and ensure it's accessible locally (e.g., ws://localhost:8080)
  - Allow the app to connect and retrieve credits data
  - At the top of Streamer.bot you Click on "Import", Locate the file `Credits - Simple Scrolling.sb`.
  - Drag and Drop it with your mouse into the Streamer.bot's Import Dialog

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

### 4 👉 Launch in a Browser or OBS

#### 🌐 In a browser

Simply open `index.html` in your browser. You’ll see the credits scroll based on the latest Twitch events.

#### 🎥 In OBS

1. Open OBS
2. Add a Browser Source
3. Point it to your local index.html file, or host the file on a local server and use the URL
4. Set width/height to match your scene layout (e.g. 1920x1080)

This makes a perfect outro scene when wrapping up your stream!

## 🛠️ Customization

You can customize styles via:

- `src/style/index.css` – change colors, fonts, scroll speed, animations
- `keyframes.css` – tweak pulse or scroll effects
- Modify the JSX in the `<script type="text/babel">` block in `index.html` to change layout
- Modify configuration in `src/js/config.js` to set the WebSocket URL and port as well as apply custom styles

### Animations

Animations are powered by [Animate.css](https://animate.style/) and defined in `src/style/keyframes.css`. To disable animations for anything, simply comment out the animation line.

```javascript
// animation: 'glowing-neon 1.7s infinite ease-in-out',
```

## 🔧 Technical Overview

- Built with React 18 (CDN) via Babel in-browser
- Uses pure HTML + JavaScript — no npm, no bundler, no build step
- Fully dynamic: data structure is determined at runtime from WebSocket response

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add support for new Twitch event types
- Improve styling and animations
- Refactor to support React + Vite for modern deployment

## 💬 Support

If you need help or have questions, feel free to open an Issue or DM me on Twitch or Discord.

## 📄 License

MIT License. Free to use, fork, and modify!
