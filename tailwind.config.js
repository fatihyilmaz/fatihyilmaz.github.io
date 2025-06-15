module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./posts/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        'maxbill-white': '#FAFAFA',
        'maxbill-black': '#333333',
        'maxbill-orange': '#FF6F00',
        'maxbill-gray': '#E0E0E0',
        'maxbill-red': '#D7263D'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1: {
              marginTop: '2em',
              marginBottom: '1em',
            },
            h2: {
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};