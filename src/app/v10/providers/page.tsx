'use client'
import CodeBlock from '@/components/atoms/CodeBlock'
import Heading from '@/components/atoms/Heading'
import Section from '@/components/atoms/Section'
import ToggleCodeBlock from '@/components/molecules/ToggleCodeBlock'
import V10PageTemplate from '@/components/templates/V10PageTemplate'
import commonStyles from '@/styles/common.module.scss'
import { Typography } from '@mui/material'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import { useEffect } from 'react'
import ModuleDirectoryStructureExample from './ModuleDirectoryStructureExample'
import { listOfContents } from './listOfContents'
import {
  dependencyInjectionSnippet,
  jsCatInterfaceSnippet,
  jsCatsControllerSnippet,
  jsCatsServiceSnippet,
  jsProviderRegistrationSnippet,
  optionalProviderSnippet,
  propertyBasedInjectionSnippet,
  tsCatInterfaceSnippet,
  tsCatsControllerSnippet,
  tsCatsServiceSnippet,
  tsProviderRegistrationSnippet,
} from './snippets'

function ProvidersPage() {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <V10PageTemplate listOfContents={listOfContents}>
      <Section>
        <Heading id={listOfContents[0].id} variant="h1">
          {listOfContents[0].title}
        </Heading>
        <p>TODO:</p>
        <figure className={commonStyles.externalImage}>
          {/* TODO: イメージは自分で作ったものに置き換えること size:970x518 */}
          <img src="https://docs.nestjs.com/assets/Components_1.png" />
          <figcaption>
            <Typography variant="caption">
              image from https://docs.nestjs.com/providers
            </Typography>
          </figcaption>
        </figure>
      </Section>
      <Section>
        <Heading id={listOfContents[1].id} variant="h2">
          {listOfContents[1].title}
        </Heading>
        <p>TODO:</p>
        <ToggleCodeBlock
          tsSnippet={tsCatsServiceSnippet}
          jsSnippet={jsCatsServiceSnippet}
        />
        <ToggleCodeBlock
          tsSnippet={tsCatInterfaceSnippet}
          jsSnippet={jsCatInterfaceSnippet}
        />
        <ToggleCodeBlock
          tsSnippet={tsCatsControllerSnippet}
          jsSnippet={jsCatsControllerSnippet}
        />
      </Section>
      <Section>
        <Heading id={listOfContents[2].id} variant="h2">
          {listOfContents[2].title}
        </Heading>
        <p>TODO:</p>
        <CodeBlock snippet={dependencyInjectionSnippet} />
      </Section>
      <Section>
        <Heading id={listOfContents[3].id} variant="h2">
          {listOfContents[3].title}
        </Heading>
        <p>TODO:</p>
      </Section>
      <Section>
        <Heading id={listOfContents[4].id} variant="h2">
          {listOfContents[4].title}
        </Heading>
        <p>TODO:</p>
      </Section>
      <Section>
        <Heading id={listOfContents[5].id} variant="h2">
          {listOfContents[5].title}
        </Heading>
        <p>TODO:</p>
        <CodeBlock snippet={optionalProviderSnippet} />
      </Section>
      <Section>
        <Heading id={listOfContents[6].id} variant="h2">
          {listOfContents[6].title}
        </Heading>
        <p>TODO:</p>
        <CodeBlock snippet={propertyBasedInjectionSnippet} />
      </Section>
      <Section>
        <Heading id={listOfContents[7].id} variant="h2">
          {listOfContents[7].title}
        </Heading>
        <p>TODO:</p>
        <ToggleCodeBlock
          tsSnippet={tsProviderRegistrationSnippet}
          jsSnippet={jsProviderRegistrationSnippet}
        />
        <ModuleDirectoryStructureExample />
      </Section>
      <Section>
        <Heading id={listOfContents[8].id} variant="h2">
          {listOfContents[8].title}
        </Heading>
        <p>TODO:</p>
      </Section>
    </V10PageTemplate>
  )
}

export default ProvidersPage
