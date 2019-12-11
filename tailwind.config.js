/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const tailwind = {
  theme: {
    extend: {
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
      colors: {
        beaumonts: "#f8f8f7",
        action: "#5f1544",
        hendercare: "#fff3f1",
        footer: "#242528"
      }
    },
    variants: {},
    plugins: []
  }
};

module.exports = tailwind;
