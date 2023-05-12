/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
]
export const theme = {
  extend: {
    colors: {
      'everglade': {
        50: '#5AC58C',
        100: '#4BC081',
        200: '#3BA86D',
        300: '#308959',
        400: '#266B46',
        500: '#1B4D32',
        600: '#0C2317',
        700: '#000000',
        800: '#000000',
        900: '#000000',
        950: '#000000'
      },
      'sea-pink': {
        50: "#FDF3F2",
        100: "#FBEAE9",
        200: "#F7D2CF",
        300: "#F3BDB9",
        400: "#EFA9A4",
        500: "#EB938C",
        600: "#E0574D",
        700: "#BF2C21",
        800: "#7E1D16",
        900: "#410F0B",
        950: "#1E0705"
      }
    },
    fontFamily: {
      serif: ['var(--font-garamond)', ...fontFamily.sans],
      sans: ['var(--font-merriweather)', ...fontFamily.sans],
    },
  },
}
export const plugins = []

