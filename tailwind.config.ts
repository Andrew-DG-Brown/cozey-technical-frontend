import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cozey-blue': 'rgb(11, 35, 65)',
        'cozey-black': 'rgb(25, 20, 43)',
        'cozey-white': 'rgb(247, 248, 246)',
        'cozey-beige': 'rgb(236, 235, 231)',
        'cozey-cyan': 'rgb(105, 162, 255)',
        'cozey-violet': 'rgb(83, 84, 138)', //small text under product image card
        'cozey-brown': 'rgb(179, 164, 155)', //for 'outdoor' badge
        'cozey-tan': 'rgb(179, 92, 30)', //for 'Save {percent}' text
        'cozey-table-oak': 'rgb(221, 181, 134)',
        'cozey-table-black-wood': 'rgb(10, 4, 1)',
        'cozey-table-walnut': 'rgb(88, 47, 17)',
        'cozey-table-espresso': 'rgb(68, 33, 9)',
        'cozey-table-sandstone': 'rgb(236, 235, 231)',
        'cozey-table-pebble': 'rgb(90, 90, 90)',
        'cozey-table-eclipse': 'rgb(29, 29, 29)',
        'cozey-table-twilight': 'rgb(153, 153, 153)',
        'cozey-table-solstice': 'rgb(248, 248, 248)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
