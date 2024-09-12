module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
    },
    extend: {
      colors: {
        pink: {
          5: "#ffeff2",
          10: "#ffdfe4",
          20: "#ffa8af",
          30: "#ff5160",
          40: "#e21f2c",
          50: "#bf3c47",
        },
        blue: {
          5: "#f4f8ff",
          10: "#dfe9fe",
          20: "#afc9fd",
          30: "#6093fc",
          40: "#2572f7",
          50: "#1b55b9",
        },
        slate: {
          10: "#edf4f9",
          20: "#cfddee",
          30: "#a7b9cc",
          40: "#879ab1",
          50: "#56667d",
          60: "#414c5a",
        },
        gray: {
          10: "#f5f5f5",
          20: "#eee",
          30: "#ddd",
          40: "#ccc",
          50: "#9e9e9e",
          60: "#777",
          70: "#1f1f1f",
        },
      },
    },
  },
  plugins: [],
};
