import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        comfortaa: ['var(--font-comfortaa)'],
        caveat: ['var(--font-caveat)'],
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
      fadeIn: {
        '0%': { transform: 'translateY(-50%)', opacity: '0' },
        '100%': { transform: 'translateY(0%)', opacity: '1' }
      }
    },
  },
  plugins: [],
};
export default config;
