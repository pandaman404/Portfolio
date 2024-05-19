/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1200px',
            },
        },
        extend: {
            fontFamily: {
                logo: ['Architects Daughter', 'cursive'],
                body: ['Manrope', 'sans-serif'],
            },
            colors: {
                'shark': {
                    100: '#f8f8f8',
                    200: '#EEEEEE',
                    300: '#D4D4D8',
                    400: '#9E9EA7',
                    800: '#18181B',
                    900: '#0e0e11',
                },
                'purple-heart': {
                    50: '#f3f1ff',
                    100: '#ebe5ff',
                    200: '#d9ceff',
                    300: '#bea6ff',
                    400: '#9f75ff',
                    500: '#843dff',
                    600: '#7916ff',
                    700: '#6b04fd',
                    800: '#5a03d5',
                    900: '#4b05ad',
                    950: '#2c0076',
                },
            },
            spacing: {
                navbar: '100px',
            },
        },
    },
    plugins: [],
};
