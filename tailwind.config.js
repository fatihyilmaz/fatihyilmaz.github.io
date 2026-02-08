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
        ink: '#0A0A0A',
        frost: '#FFFFFF',
        dune: '#111111',
        graphite: '#4B4B4B',
        mist: '#F2F2F2'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 50px rgba(15, 23, 42, 0.18)',
        soft: '0 12px 30px rgba(15, 23, 42, 0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)'
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
