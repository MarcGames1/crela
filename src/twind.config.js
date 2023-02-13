export default {
  
  theme: {
    extend: {
      fontFamily: {
        sans: `Poppins Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
      colors: {
        primary: {
          DEFAULT: '#181E4B',
        },
        secondary: {
          DEFAULT: '#DF6951',
        },
      },
      container: {
        center: true,
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      fontSize: {
        small: '1rem',
        medium: '1.125rem',
        large: '1.75rem',
        xlarge: '2rem',
      },
    },
  },
};
