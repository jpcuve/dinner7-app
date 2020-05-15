import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette:{
    primary: {        
      main: "#DD9570",
    },
    secondary: {
      main: "#DFCDC3",
    },
    error: {
      main: '#FF0000'
    },
    warning: {
      main: '#FFFF00'
    },
    info: {
      main: '#0000FF'
    },
    success: {
      main: '#00FF00'
    },
    background: {
      default: '#DDDDDD',
      paper: '#FF0000',
    },
  },
  typography: {
    fontFamily: 'Serif'
  },
  overrides: {
    MuiButton: {
      text: {
        color: 'blue'
      }
    }
  }
})
