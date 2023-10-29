'use client'
import TocNavigation from '@/components/molecules/TocNavigation'
import AboutThisSiteInfo from '@/components/organisms/AboutThisSiteInfo'
import MenuBar from '@/components/organisms/MenuBar'
import { Box, Grid } from '@mui/material'

function V10Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  )
}

export default V10Layout
