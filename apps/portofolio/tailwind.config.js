const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    presets: [sharedConfig],
    content: [
        `./app/**/*.{js,ts,jsx,tsx}`,
        `./components/**/*.{js,ts,jsx,tsx}`,
        `./features/**/*.{js,ts,jsx,tsx}`,
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            colors: {},
        },
    },
}
