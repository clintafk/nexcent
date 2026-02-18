import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',  // Custom breakpoint for 1024px-1260px support
      '2xl': '1280px', // Larger screens
    },
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#2196F3',
        dark: '#263238',
        light: '#F5F7FA',
        // Add more colors as needed
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        // Add more sizes as needed
      },
      spacing: {
        '2.25': '0.5625rem',  // 9px
        '2.5': '0.625rem',    // 10px
        '3.5': '0.875rem',    // 14px
        '7.5': '1.875rem',    // 30px
        '10.25': '2.5625rem', // 41px
        '12.5': '3.125rem',   // 50px
        '12.75': '3.1875rem', // 51px
        '15': '3.75rem',      // 60px
        '19': '4.75rem',      // 76px
        '19.5': '4.875rem',   // 78px
        '21': '5.25rem',      // 84px
        '26.5': '6.625rem',   // 106px
        '30': '7.5rem',       // 120px
        '36': '9rem',         // 144px
        '41.25': '10.3125rem', // 165px
        '66.75': '16.6875rem', // 267px
        '135.5': '33.875rem',  // 542px
        '157': '39.25rem',     // 628px
        '165.25': '41.3125rem', // 661px
        '187': '46.75rem',     // 748px
      },
      lineHeight: {
        '5': '1.25rem',  // 20px
        '9': '2.25rem',  // 36px
        '11': '2.75rem', // 44px
        '19': '4.75rem', // 76px
      },
    },
  },
  plugins: [],
}

export default config
