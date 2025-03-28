/**
 * @file config.js
 * @description This module provides configuration settings for various aspects of the application,
 * including WebSocket connections, environment settings, image resources, text messages, and section headings.
 * All configuration objects are defined as constants and can be imported as needed.
 *
 * Dude, always keep your configurations organized and well-documented!
 * 
 * @module config
 */

/**
 * @typedef {Object} SocketConfig
 * @property {string} url - The WebSocket connection URL.
 * @property {number} port - The port number for the WebSocket connection.
 */

/**
 * WebSocket connection settings.
 * @type {SocketConfig}
 */
const socketConfig = {
    url: 'ws://127.0.0.1',
    port: 8080
};

/**
 * @typedef {Object} EnvironmentConfig
 * @property {boolean} testing - Flag indicating whether the application is in testing mode.
 */

/**
 * Environment settings.
 * @type {EnvironmentConfig}
 */
const environmentConfig = {
    testing: true
};

/**
 * @typedef {Object} ImageDetails
 * @property {string} src - The source URL of the image.
 * @property {string} alt - The alternative text description of the image.
 * @property {Object} style - Style properties for the image.
 * @property {number} style.width - The width of the image in pixels.
 * @property {number} style.height - The height of the image in pixels.
 * @property {string} [style.margin] - Optional margin style for the image.
 * @property {boolean} show - Flag to determine if the image should be displayed.
 */

/**
 * @typedef {Object} ImageConfig
 * @property {ImageDetails} introImage - Configuration for the introductory image.
 * @property {ImageDetails} outroImage - Configuration for the concluding image.
 */

/**
 * Image configuration settings for intro and outro images.
 * @type {ImageConfig}
 */
const imageConfig = {
    introImage: {
        src: 'https://res.cloudinary.com/studio42-web-development/image/upload/v1739058435/Gaming/kav9svkuerviqk7rmloi.png',
        alt: "Satan's Gerbils",
        style: {
            width: 288,
            height: 288,
            margin: '40px auto',
            borderRadius: '25%'
        },
        show: false
    },
    outroImage: {
        src: 'https://res.cloudinary.com/studio42-web-development/image/upload/v1671603099/Gaming/daer0mimlj7u0ep5ftoe.jpg',
        alt: 'So long, and thanks for all the fish!',
        style: {
            width: 350,
            height: 197,
            margin: '40px auto',
            borderRadius: '20px'
        },
        show: true
    }
};

/**
 * @typedef {Object} TextConfig
 * @property {string} introText - Introductory text to display.
 * @property {string} outroText - Outro text to display.
 */

/**
 * Text configuration settings for intro and outro text.
 * @type {TextConfig}
 */
const textConfig = {
    introText: 'Thanks for watching!',
    outroText: 'So long, and thanks for all the fish!'
};

/**
 * @typedef {Object} HeadingDetail
 * @property {boolean} show - Toggle to display or hide the section.
 * @property {string} icon - Font Awesome icon class for the heading.
 */

/**
 * @typedef {Object} HeadingsConfig
 * @property {HeadingDetail} events - Configuration for the Events section.
 * @property {HeadingDetail} hypeTrain - Configuration for the Hypetrain section.
 * @property {HeadingDetail} users - Configuration for the Users section.
 * @property {HeadingDetail} groups - Configuration for the Groups section.
 * @property {HeadingDetail} top - Configuration for the Top section.
 */

/**
 * Headings configuration for individual sections of the Twitch credits.
 * @type {HeadingsConfig}
 */
const headingsConfig = {
    events: {
        show: true,
        icon: "fa-solid fa-cake-candles",
    },
    hypeTrain: {
        show: true,
        icon: 'fa-solid fa-train'
    },
    users: {
        show: true,
        icon: 'fa-solid fa-users'
    },
    groups: {
        show: false,
        icon: 'fa-solid fa-people-group'
    },
    top: {
        show: true,
        icon: 'fa-solid fa-award'
    }
};
