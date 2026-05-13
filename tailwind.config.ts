import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1120px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
};

export default config;
