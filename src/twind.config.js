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
        paragraph: {
          DEFAULT: '#5E6282',
        },
        crelaroz: {
          DEFAULT: '#FF0090',
        },
        foreground: '#000000',
        background: '#FFFFFF',
        primary: '#181E4B',
        secondary: '#DF6951',
        crelaRoz: '#FF0090',
        paragraph: '#5E6282',
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
        huge: 'clamp(2.25rem, 4vw, 2.75rem)',
        gigantic: 'clamp(2.75rem, 6vw, 3.25rem)',
        colossal: 'clamp(3.25rem, 8vw, 6.25rem)',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },

  purge: ['./**/*.tsx', './**/*.css'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
