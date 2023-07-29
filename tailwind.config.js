const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#f43f5e',
                    dark: '#e11d48',
                    light: '#fb7185',
                    verylight: '#fda4af',
                },
                secondary: {
                    DEFAULT: '#444',
                    dark: '#333',
                    light: '#555',
                    verylight: '#666',
                },
                danger: {
                    DEFAULT: '#FF3030',
                },
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
