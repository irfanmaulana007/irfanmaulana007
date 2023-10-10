const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    presets: [sharedConfig],
    content: [`./app/*.{js,ts,jsx,tsx}`, `./app/**/*.{js,ts,jsx,tsx}`],
    theme: {
        container: {
            center: true,
            screens: {
                md: '680px',
            },
        },
        extend: {
            colors: {},
        },
    },
}
