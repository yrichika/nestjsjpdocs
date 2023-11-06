'use client'
import Heading from '@/components/atoms/Heading'
import V10PageTemplate from '@/components/templates/V10PageTemplate'
import commonStyles from '@/styles/common.module.scss'
import { Box, Typography } from '@mui/material'
import { listOfContents } from './listOfContents'

function ControllersPage() {
  return (
    <V10PageTemplate listOfContents={listOfContents}>
      <Box sx={{ mt: 5 }}>
        <Heading id={listOfContents[0].id} variant="h1">
          {listOfContents[0].title}
        </Heading>
        <p>TODO:</p>
        <figure className={commonStyles.externalImage}>
          {/* TODO: イメージは自分で作ったものに置き換えること size:970x420 */}
          <img src="https://docs.nestjs.com/assets/Controllers_1.png" />
          <figcaption>
            <Typography variant="caption">
              image from https://docs.nestjs.com/controllers
            </Typography>
          </figcaption>
        </figure>
        <p>TODO:</p>
      </Box>
    </V10PageTemplate>
  )
}

export default ControllersPage
