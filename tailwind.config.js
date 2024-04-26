module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Shadows+Into+Light',
      secondary: 'Shadows+Into+Light',
      tertiary: 'Shadows+Into+Light',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/aboutImg.png')",
        services: "url('./assets/services.jpg')",
      },
    },
  },
  plugins: [],
};
