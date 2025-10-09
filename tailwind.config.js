/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f3f4f6',
          dark: '#1f2937',
        },
        card: {
          light: '#ffffff',
          dark: '#252728',
        },
        text: {
          primary: {
            light: '#1f2937',
            dark: '#f9fafb',
          },
          secondary: {
            light: '#6b7280',
            dark: '#9ca3af',
          },
        },
        border: {
          light: '#e5e7eb',
          dark: '#3a3a3a',
        },
      },
    },
  },
  plugins: [],
};