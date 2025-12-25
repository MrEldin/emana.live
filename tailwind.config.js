import PrimeUI from 'tailwindcss-primeui';

export default {
    content: [
        "./formkit.theme.mjs",
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'card': '0px 1px 3px 0 rgba(0,0,0,0.15)'
            },
            screens: {
                '3xl': '1920px',
                '4xl': '2500px',
            },
            width: {
                '1/8': '12.5%',
            },
            colors: {
                surface: {
                    0: 'rgb(255 255 255)',
                    50: 'rgb(248 250 252)',
                    100: 'rgb(241 245 249)',
                    200: 'rgb(226 232 240)',
                    300: 'rgb(203 213 225)',
                    400: 'rgb(148 163 184)',
                    500: 'rgb(100 116 139)',
                    600: 'rgb(71 85 105)',
                    700: 'rgb(45 55 72)',
                    800: 'rgb(30 41 59)',
                    900: 'rgb(15 23 42)',
                    950: 'rgb(3 6 23)',
                },
                green: {
                    DEFAULT: '#027554',
                    darkS1: '#006246',
                },
                yellow: {
                    main: '#FFD681'
                },
                orange: {
                    main: '#dda34c'
                },
                gray: {
                    DEFAULT: '#A6A6A6',
                },
                beige: {
                    DEFAULT: '#FAF7EA',
                }
            }
        },
    },
    plugins: [
        PrimeUI,
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
        function ({ addUtilities }) {
            const newUtilities = {
                '.scrollbar-reserved': {
                    'scrollbar-width': 'thin',
                    '-ms-overflow-style': 'scrollbar',
                    'overflow-y': 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '12px',
                        background: 'transparent',  // make it transparent by default
                    },
                    '&::-webkit-scrollbar-thumb': {
                        'background-color': 'transparent',  // make it transparent by default
                    },
                    '&::-webkit-scrollbar-track': {
                        'background-color': 'transparent',  // make it transparent by default
                    },
                    '&:hover::-webkit-scrollbar-thumb': {
                        'background-color': 'rgba(0, 0, 0, 0.5)',  // color when hovering
                    },
                    '&:hover::-webkit-scrollbar-track': {
                        'background-color': 'rgba(0, 0, 0, 0.1)',  // color when hovering
                    },
                    'padding-right': '12px',
                    'margin-right': '-12px',
                },
            }

            addUtilities(newUtilities, ['responsive', 'hover'])
        },
    ],
}
