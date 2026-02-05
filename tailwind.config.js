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
        'maxbill-red': '#D7263D',
        ink: '#0B0B15',
        frost: '#F7F6F3',
        dune: '#1B1B1F',
        coral: '#FF6B5E',
        mint: '#34D399',
        sky: '#60A5FA',
        sun: '#FBBF24'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Sora"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 50px rgba(15, 23, 42, 0.18)',
        soft: '0 12px 30px rgba(15, 23, 42, 0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 10% -10%, rgba(52, 211, 153, 0.35), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(96, 165, 250, 0.35), transparent 55%), linear-gradient(180deg, #F7F6F3 0%, #FFFFFF 100%)'
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
