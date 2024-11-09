/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.3)), url('assets/img-1.jpg')",

                'service-pattern': "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.9)), url('assets/mike.jpg')",

                'gallery-pattern1': "url('assets/img-12.jpg')",

                'gallery-pattern2': "url('assets/img-14.jpg')",

                'gallery-pattern3': "url('assets/img-19.jpg')",

                'gallery-pattern4': "url('assets/img-16.jpg')",

                'gallery-pattern5': "url('assets/img-17.jpg')",

                'footer-pattern': "linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/chog.gif')",

            },
            backgroundSize: {
                'hero-pattern': 'cover',
                'service-pattern': '50%',
                'gallery-pattern1': 'contain',
                'gallery-pattern2': 'contain',
                'gallery-pattern3': 'contain',
                'gallery-pattern4': 'contain',
                'gallery-pattern5': 'contain',
                'footer-pattern': 'cover',
            },
            backgroundPosition: {
                'hero-pattern': 'center',
                'service-pattern': 'right',
                'gallery-pattern1': 'center',
                'gallery-pattern2': 'center',
                'gallery-pattern3': 'center',
                'gallery-pattern4': 'center',
                'gallery-pattern5': 'center',
                'footer-pattern': 'center',
            },
            backgroundRepeat: {
                'service-pattern': 'no-repeat',
            },
            backgroundColor: {
                'light-overlay': 'rgba(255, 255, 255, 0.5)',
            },
        },
    },
    plugins: [],
}