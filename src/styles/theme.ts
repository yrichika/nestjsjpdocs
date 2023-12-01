import { createTheme, responsiveFontSizes } from '@mui/material'

// REF: https://mui.com/material-ui/customization/default-theme/

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '1.8rem',
    },
    h2: {
      fontSize: '1.6rem',
    },
    h3: {
      fontSize: '1.4rem',
    },
    h4: {
      fontSize: '1.2rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.8rem',
    },
  },
})
export const responsiveTheme = responsiveFontSizes(theme)
