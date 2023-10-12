const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    presets: [sharedConfig],
    content: [`./src/**/*.{js,ts,jsx,tsx}`],
    theme: {
        extend: {
            colors: {
                grey: '#757575',
                light: '#adb3b8',
                dark: '#778088',
            },
        },
    },
}
