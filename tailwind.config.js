/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#09090b', // zinc-950
          900: '#18181b', // zinc-900
          850: '#27272a', // zinc-800
          800: '#3f3f46', // zinc-700
          700: '#52525b', // zinc-600
          600: '#71717a', // zinc-500
        },
        ice: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
        cyan: {
          glow: '#f4f4f5', // muted white
          tech: '#d4d4d8', // light zinc
          dark: '#a1a1aa',
        },
        slate: {
          850: '#151E2E',
          950: '#0A0F1D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      backgroundImage: {
        'tech-grid': 'none',
        'tech-dots': 'none',
      },
    },
  },
  plugins: [],
}
