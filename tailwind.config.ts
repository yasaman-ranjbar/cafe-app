import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "4rem",
      screens: {
        sm: '540px',
        md: '768px',
        lg: '992px',
        xl: '1140px',
      },
    },
    colors: {
      white: "#fff",
      yellow: "#da9f5b",
      gray: "#A1A1A1",
      darkGray: "#313131",
      brown:"#33211d",
    },
    textColor: {
      primary: "#33211d",
      yellow: "#da9f5b",
      white: "#fff",
      gray:"#555555"
    },
    extend: {
      backgroundColor: {
        'primary-dark': '#141414',
        'primary-light': '#fffbf2',
      }
    },
  },
  plugins: [],
}
export default config
