/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c0',
          300: '#f6be95',
          400: '#f19968',
          500: '#ec7c47',
          600: '#de5f2c',
          700: '#b84a24',
          800: '#933d25',
          900: '#763421',
        },
        secondary: {
          50: '#f8f6f4',
          100: '#f0ebe6',
          200: '#e0d5cc',
          300: '#cdb8a8',
          400: '#b89684',
          500: '#a87c6a',
          600: '#9b6b5e',
          700: '#815850',
          800: '#694a45',
          900: '#553d39',
        },
        accent: {
          50: '#fdf4f3',
          100: '#fce7e6',
          200: '#fbd4d2',
          300: '#f7b5b2',
          400: '#f18b86',
          500: '#e8645d',
          600: '#d4453c',
          700: '#b23530',
          800: '#942e2d',
          900: '#7c2b2e',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f4f4f3',
          200: '#e6e6e4',
          300: '#d1d1ce',
          400: '#b0b0ab',
          500: '#8e8e87',
          600: '#6f6f68',
          700: '#5a5a54',
          800: '#4a4a45',
          900: '#3d3d39',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'beauty-gradient': 'linear-gradient(135deg, #fef7f0 0%, #fdeee0 50%, #fad9c0 100%)',
        'accent-gradient': 'linear-gradient(135deg, #e8645d 0%, #d4453c 100%)',
      },
    },
  },
  plugins: [],
}