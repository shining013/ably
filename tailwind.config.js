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
      fontSize: {
        // h1~h5
        h5: [
          "18px",
          { lineHeight: "24px", letterSpacing: "-0.6px", fontWeight: 600 },
        ],
        // body1~5
        body1: [
          "16px",
          { lineHeight: "20px", letterSpacing: "-0.4px", fontWeight: 400 },
        ],
        body2: [
          "14px",
          { lineHeight: "18px", letterSpacing: "-0.4px", fontWeight: 400 },
        ],
        body3: [
          "13px",
          { lineHeight: "16px", letterSpacing: "-0.2px", fontWeight: 400 },
        ],
        body4: [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "-0.2px",
            fontWeight: 400,
          },
        ],
        body5: ["11px", { lineHeight: "14px", fontWeight: 400 }],
        body6: ["10px", { lineHeight: "14px", fontWeight: 400 }],
        // subtitle1~5
        subtitle1: [
          "16px",
          { lineHeight: "20px", letterSpacing: "-0.4px", fontWeight: 600 },
        ],
        subtitle2: [
          "14px",
          { lineHeight: "18px", letterSpacing: "-0.4px", fontWeight: 600 },
        ],
        subtitle4: [
          "12px",
          { lineHeight: "16px", letterSpacing: "-0.2px", fontWeight: 600 },
        ],
        subtitle6: ["10px", { lineHeight: "14px", fontWeight: 600 }],
      },
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
      boxShadow: {
        "custom-inset": "rgb(238, 238, 238) 0px 1px 0px inset",
      },
    },
  },
  plugins: [],
};
