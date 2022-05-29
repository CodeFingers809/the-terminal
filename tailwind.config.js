module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      animation: {
        blink: "blinker 1s ease-in-out infinite",
      },
      keyframes: {
        blinker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      fontFamily:{
        fira:['"Fira Code"', 'Consolas', '"Courier New"', 'monospace']
      }
    },
  },
  plugins: [],
};
