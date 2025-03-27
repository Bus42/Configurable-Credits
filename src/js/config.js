
/**
 * WebSocket connection settings
 * @type {SocketConfig}
 */

const socketConfig = {
    url: 'ws://127.0.0.1',
    port: 8080
};

/**
 * Environment settings
 * @type {EnvironmentConfig}
 */
const environmentConfig = {
    testing: true
};

/**
 * @typedef {Object} ImageConfig
 * @property {Object} introImage - Configuration for the intro image
 * @property {string} introImage.src - Source URL of the intro image
 * @property {string} introImage.alt - Alt text for the intro image
 * @property {Object} introImage.style - Style properties for the intro image
 * @property {number} introImage.style.width - Width of the intro image
 * @property {number} introImage.style.height - Height of the intro image
 * @property {boolean} introImage.show - Flag to show the intro image
 * @property {Object} outroImage - Configuration for the outro image
 * @property {string} outroImage.src - Source URL of the outro image
 * @property {string} outroImage.alt - Alt text for the outro image
 * @property {Object} outroImage.style - Style properties for the outro image
 * @property {number} outroImage.style.width - Width of the outro image
 * @property {number} outroImage.style.height - Height of the outro image
 * @property {boolean} outroImage.show - Flag to show the outro image
 */
const imageConfig = {
    introImage: {
        src: 'https://res.cloudinary.com/studio42-web-development/image/upload/v1739058435/Gaming/kav9svkuerviqk7rmloi.png',
        alt: 'Satan\'s Gerbils',
        style: {
            width: 288,
            height: 288,
        },
        show: true
    },
    outroImage: {
        src: 'https://res.cloudinary.com/studio42-web-development/image/upload/v1671603099/Gaming/daer0mimlj7u0ep5ftoe.jpg',
        alt: 'So long, and thanks for all the fish!',
        style: {
            width: 350,
            height: 197,
        },
        show: true
    }
};

/**
 * * @typedef {Object} TextConfig
 * @property {string} introText - Introductory text to display
 * @property {string} outroText - Outro text to display
 */
const textConfig = {
    introText: 'Thanks for watching!',
    outroText: 'So long, and thanks for all the fish!'
};

const creditsVisibility = {
    events: { show: true },
    hypeTrain: { show: true },
    users: { show: true },
    groups: { show: false },
    top: { show: true }
};