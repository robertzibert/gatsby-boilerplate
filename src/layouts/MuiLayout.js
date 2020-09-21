import React from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import "./styles.css"
/*
  Theme guide: https://material-ui.com/customization/default-theme/
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fd691d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#fd691d",
    },
    text: {
      primary: "#2e3a59",
    },
  },

  typography: {
    fontFamily: "'Open Sans', 'Lato', sans-serif",
    fontStyle: "normal",
    fontDisplay: "swap",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 900,
      lineHeight: 1.11,
      objectFit: "contain",
    },
    h6: {
      fontSize: "0.9375rem",
      fontWeight: 400,
      lineHeight: 2,
      objectFit: "contain",
    },
    subtitle1: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.67,
    },
    body1: {
      fontSize: "0.9375rem",
      fontWeight: 300,
      lineHeight: 2,
    },
  },
  shadows: ["none", "0 7px 20px 0 #32325d26"],
})

const MuiLayout = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default MuiLayout
