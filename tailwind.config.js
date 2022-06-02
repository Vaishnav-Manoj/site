module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    fontFamily: {
      sans: ['Be Vietnam Pro', 'system-ui', 'sans']
    },
    extend: {
            keyframes: {
        wave: {
          '0%, 100%, 20%, 50%, 80%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        'waving-hand': 'wave 4s linear infinite',
      },
      colors: {
        dark: '#000',
        white: '#fff',
        lightText: '#76797d',
        bgDark: '#2E3440',
        cardDark: '#434C5E',
        butDark: '#5E81AC',
        bgLight: '#D8DEE9',
        cardLight: '#E5E9F0',
        butLight: '#81A1C1'
      }
    }
  },
  variants: {
  },
  plugins: []
};