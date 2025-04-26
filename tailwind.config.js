// tailwind.config.js


export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'pulse-fast': 'pulse 1.2s ease-in-out infinite',
          'pulse-slow': 'pulse 3s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  