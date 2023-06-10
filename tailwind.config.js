module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        width: "width",
      },
      colors: {
        "smoke-darkest": "rgba(0, 0, 0, 0.9)",
        "smoke-darker": "rgba(0, 0, 0, 0.75)",
        "smoke-dark": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-light": "rgba(0, 0, 0, 0.4)",
        "smoke-lighter": "rgba(0, 0, 0, 0.25)",
        "smoke-lightest": "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus", "active"],
      transitionProperty: ["responsive", "hover", "focus", "active"],
      transitionDuration: ["hover", "focus", "active"],
      transitionTimingFunction: ["hover", "active", "focus"],
    },
  },
  plugins: [],
};
