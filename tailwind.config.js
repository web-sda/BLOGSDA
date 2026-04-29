/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#e11d48',
        navy: '#0f172a',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: { color: '#e11d48' },
            'h1,h2,h3,h4': { color: '#0f172a' },
          }
        }
      }
    }
  },
  plugins: []
}
