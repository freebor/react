/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkTopHeader: "#252B42",
        loginLinkColor: "#23A6F0",
        checkOutBlue: "#0156FF",
        checkOutYellow: {
          bg: "#FFB800",
          text: "#232C65"
        },
        lightGrayText: "#A2A6B0",
        grayText: {
          10: "#737373",
          20: "#666",
          30: "#CACDD8",
          40: "#A1A1A1",
          50: "#A2A6B0"
        },
        topProductColor: "#2d8bc0bf",
        dangerColor: "#E74040",
        darkTextColor: "#252B42",
        mutedColor: "#BDBDBD",
        greenColor: "#23856D",
        alertColor: "#E77C40",
        inputColor: "#E6E6E6",
        gridDropdown: {
          10: "#F5F7FF",
          20: "#F9F9F9",
        },
        gridBorderColor: "#DDD",
        bgTransparent: "#00000027",
        breadCrumBg: "#FAFAFA",
        bgSmallColor: "#F6F6F6",
        stroke: "#00AEB8",
      }
    },
  },
  plugins: [],
}

