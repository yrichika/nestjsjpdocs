'use client'
import Heading from '@/components/atoms/Heading'
import Section from '@/components/atoms/Section'
import V10PageTemplate from '@/components/templates/V10PageTemplate'
import { listOfContents } from './listOfContents'

function ProvidersPage() {
  return (
    <V10PageTemplate listOfContents={listOfContents}>
      <Section>
        <Heading id={listOfContents[0].id} variant="h1">
          {listOfContents[0].title}
        </Heading>
        <p>TODO:</p>
      </Section>
    </V10PageTemplate>
  )
}

export default ProvidersPage
