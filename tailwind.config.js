module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontNavbar: "'Cormorant Garamond',sans-serif",
        fontCard: "'Cormorant Garamond', serif",
        roboto: "'Roboto Serif', serif",
      },
      colors: {
        "navbar-color": "#b08ead",
        "border-top-color": "#d6bbd3",
        "textbox-bg": "  #ceb3cb ",
        "card-textcolor": "#fff",
        "icon-bg": "#ba9fb7",
        "footer-bg": "#c9adc6",
      },
      screens: {
        "size-992": "992px",
        fm: { max: "641px" },
      },
    },
  },

  plugins: [],
};
