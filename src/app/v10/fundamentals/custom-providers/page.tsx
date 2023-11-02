'use client'

import V10PageTemplate from '@/components/templates/V10PageTemplate'

function CustomProvidersPage() {
  const listOfContents = [{ title: 'Custom Providers', id: 'custom-providers' }]
  return (
    <V10PageTemplate listOfContents={listOfContents}>
      Custom Providers
    </V10PageTemplate>
  )
}

export default CustomProvidersPage
