/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          hover: '#0052CC',
          glow: '#0066FF',
        },
        accent: {
          cyan: '#00D4FF',
          purple: '#8B5CF6',
          pink: '#EC4899',
        },
        dark: {
          DEFAULT: '#000000',
          100: '#0A0A0A',
          200: '#0F0F0F',
          300: '#1A1A1A',
        },
        light: '#FFFFFF',
        gray: {
          DEFAULT: '#888888',
          dark: '#555555',
          light: '#CCCCCC',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glow': 'linear-gradient(135deg, #0066FF 0%, #00D4FF 50%, #8B5CF6 100%)',
        'gradient-mesh': 'linear-gradient(to bottom right, #0066FF10, transparent, #00D4FF10)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        glow: {
          '0%': { boxShadow: '0 0 20px #0066FF40' },
          '100%': { boxShadow: '0 0 40px #0066FF60, 0 0 60px #0066FF40' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        },
      },
      boxShadow: {
        'glow': '0 0 40px #0066FF40',
        'glow-lg': '0 0 60px #0066FF60',
        'inner-glow': 'inset 0 0 30px #0066FF20',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}