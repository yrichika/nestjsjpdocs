'use client'
import YrichikaXLink from '@/components/atoms/YrichikaXLink'
import TocNavigation from '@/components/molecules/TocNavigation'
import AboutThisSiteInfo from '@/components/organisms/AboutThisSiteInfo'
import MenuBar from '@/components/organisms/MenuBar'
import { responsiveTheme } from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import { Box, Grid } from '@mui/material'

function V10Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <MenuBar versionPrefix="v10" />
      <main style={{ marginTop: '15px' }}>
        <AboutThisSiteInfo />
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            component={Box}
            sm={3}
            display={{ xs: 'none', sm: 'none', md: 'block' }}
          >
            <TocNavigation versionPrefix="v10" />
          </Grid>
          {children}
        </Grid>
      </main>
      <footer style={{ marginTop: '40px', marginBottom: '100px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Copyright &copy; 2023 <YrichikaXLink />
        </Box>
      </footer>
    </ThemeProvider>
  )
}

export default V10Layout
