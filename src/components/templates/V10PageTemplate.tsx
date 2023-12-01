import { ListOfContents as ListOfContentsType } from '@/types/ListOfContents'
import { Grid } from '@mui/material'
import React from 'react'
import ListOfContents from '../organisms/ListOfContents'

type Props = {
  children: React.ReactNode
  listOfContents: ListOfContentsType
}

function V10PageTemplate({ children, listOfContents }: Props) {
  return (
    <>
      <Grid item sm={9} md={7}>
        {children}
      </Grid>
      <Grid item sm={3} md={2} display={{ xs: 'none', sm: 'block' }}>
        <ListOfContents listOfContents={listOfContents} />
      </Grid>
    </>
  )
}

export default V10PageTemplate
