
/**
 * WebSocket connection settings
 * @type {SocketConfig}
 */

const socketConfig = {
    url: 'ws://127.0.0.1',
    port: 8080
};


const environmentConfig = {
    testing: true
};

const imageConfig = {
    introImage: {
        src: 'https://res.cloudinary.com/studio42-web-development/image/upload/v1739058435/Gaming/kav9svkuerviqk7rmloi.png',
        alt: 'Satan\'s Gerbils',
        style: {
            width: 800,
            height: 600
        },
        show: true
    },
    outroImage: {
        src: 'https://res.cloudinary.com/studio42-web-development/image/upload/v1671603099/Gaming/daer0mimlj7u0ep5ftoe.jpg',
        alt: 'So long, and thanks for all the fish!',
        style: {
            width: 800,
            height: 600,
        },
        show: true
    }
};

const textConfig = {
    introText: 'Thanks for watching!',
    outroText: 'So long, and thanks for all the fish!'
};