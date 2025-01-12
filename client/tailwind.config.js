module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '16px',
                    sm: '20px',
                    md: '32px',
                    lg: '48px',
                    xl: '64px',
                },
            },
            screens: {
                sm: '320px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
    },
    plugins: [],
};
