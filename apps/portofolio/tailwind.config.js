const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    presets: [sharedConfig],
    content: [`./app/**/*.{js,ts,jsx,tsx}`, `./features/**/*.{js,ts,jsx,tsx}`],
    theme: {
        extend: {
            colors: {},
        },
    },
}
