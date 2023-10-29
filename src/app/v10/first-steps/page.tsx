'use client'

import V10PageTemplate from '@/components/templates/V10PageTemplate'
import listOfContents from './listOfContents'

function FirstStepsPage() {
  return (
    <V10PageTemplate listOfContents={listOfContents()}>
      FirstStep
    </V10PageTemplate>
  )
}

export default FirstStepsPage
