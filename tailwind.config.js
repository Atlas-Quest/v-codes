/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const tailwind = {
  theme: {
    fontFamily: {
      sans: [
        "Muli",
        "Source Sans Pro",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
      ]
    },
    extend: {
      colors: {
        mint: "#a4d7d4",
        action: "#5f1544",
        hendercare: "#fff3f1"
      }
    },
    variants: {},
    plugins: []
  }
};

module.exports = tailwind;
