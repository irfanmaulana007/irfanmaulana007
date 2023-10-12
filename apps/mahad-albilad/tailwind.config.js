const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
    presets: [sharedConfig],
    content: [
        `./app/**/*.{js,ts,jsx,tsx}`,
        `./components/**/*.{js,ts,jsx,tsx}`,
        `./features/**/*.{js,ts,jsx,tsx}`,
    ],
    theme: {
        extend: {
            colors: {
                'albilad-green': '#204a3e',
                'albilad-greenLight': '#2e6b5a',
                'albilad-greenDark': '#17362d',
                'albilad-white': '#e9ede0',
                'albilad-whiteLight': '#fff',
                'albilad-whiteDark': '#d2dabe',
                'albilad-yellow': '#fdbf50',
                'albilad-yellowLight': '#fed081',
                'albilad-yellowDark': '#fdaa1c',
                'albilad-dark': '#111429',
                'albilad-dark-light': '#3c4144',
                'albilad-dark-dark': '#0c0d0e',
            },
        },
    },
}
