/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#04a784",
        "primary-dense": "#008069",
        background: "#eff2f5",
        "chat-bg": "#F2EFE9",
        "primary-light": "#D9FDD2"
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
