import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "4rem",
      screens: {
        xs: "340px",
        sm: "540px",
        md: "768px",
        lg: "992px",
        xl: "1140px",
      },
    },
    colors: {
      white: "#fff",
      yellow: "#da9f5b",
      lightGray: "#EEEEEE",
      gray: "#A1A1A1",
      darkGray: "#313131",
      brown: "#33211d",
      lightBrown: "#4f3319",
      transparent: "transparent",
      red: "#ef4444",
    },
    textColor: {
      primary: "#33211d",
      yellow: "#da9f5b",
      white: "#fff",
      gray: "#555555",
      red: "#ef4444",
      lightGray: "#EEEEEE",
    },
    extend: {
      backgroundColor: {
        "primary-dark": "#141414",
        "primary-light": "#fffbf2",
      },
      backgroundImage: {
        "background-bg": "url('/images/bg.jpg')",
        "background-top-paper": "url('/images/overlay-top.png')",
        "background-bottom-paper": "url('/images/overlay-bottom.png')",
        "background-products": "url('/images/product-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config
