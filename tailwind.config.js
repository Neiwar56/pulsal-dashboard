/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs imposées par la charte [cite: 20, 21, 22]
        primary: {
          DEFAULT: '#3590E3', // Bleu Principal
          light: '#63Abf1',
        },
        secondary: {
          DEFAULT: '#BAF09D', // Vert Secondaire
        },
        neutral: {
          50: '#F9FAFB', // Gris clair
          900: '#1F2937', // Gris foncé
        }
      },
      fontFamily: {
         
        sans: ['var(--font-ubuntu)'],
      },
    },
  },
  plugins: [],
};