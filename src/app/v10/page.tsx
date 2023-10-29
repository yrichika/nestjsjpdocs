'use client'

import V10PageTemplate from '@/components/templates/V10PageTemplate'

function Introduction() {
  const listOfContents = [{ title: 'Introduction', id: 'introduction' }]
  return (
    <V10PageTemplate listOfContents={listOfContents}>
      Introduction
    </V10PageTemplate>
  )
}

export default Introduction
