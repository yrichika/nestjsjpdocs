'use client'
import CodeBlock from '@/components/atoms/CodeBlock'
import CodeSpan from '@/components/atoms/CodeSpan'
import ExternalLink from '@/components/atoms/ExternalLink'
import Heading from '@/components/atoms/Heading'
import Section from '@/components/atoms/Section'
import Hint from '@/components/molecules/Hint'
import ToggleCodeBlock from '@/components/molecules/ToggleCodeBlock'
import V10PageTemplate from '@/components/templates/V10PageTemplate'
import commonStyles from '@/styles/common.module.scss'
import { Link, Typography } from '@mui/material'
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
        <p>
          プロバイダーは、Nestにおける基本的な概念です。多くの基礎となるNestクラスはプロバイダーとして扱うことができます
          (サービス、リポジトリ、ファクトリ、ヘルパーなどです)。プロバイダーの主なアイディアは、それがDI、依存関係として注入できるということです。つまり、オブジェクト同士を「配線する」機能を主にNestランタイムシステムに委任することができ、オブジェクト同士でさまざまな関係を構築することができます。
        </p>
        <figure className={commonStyles.externalImage}>
          {/* TODO: イメージは自分で作ったものに置き換えること size:970x518 */}
          <img src="https://docs.nestjs.com/assets/Components_1.png" />
          <figcaption>
            <Typography variant="caption">
              image from https://docs.nestjs.com/providers
            </Typography>
          </figcaption>
        </figure>
        <p>
          前のセクションでは、シンプルな<CodeSpan>CatsController</CodeSpan>
          を構築しました。コントローラーはHTTPリクエストを処理し、より複雑なタスクは
          <b>プロバイダー</b>に委任するべきです。プロバイダーは、
          <Link href="modules">モジュール</Link>内に
          <CodeSpan>providers</CodeSpan>
          として宣言されるバニラJavaScriptクラスです。
        </p>
        <Hint>
          Nestは依存関係をオブジェクト指向で設計および整理する方法を主に提供しているため、
          <ExternalLink href="https://en.wikipedia.org/wiki/SOLID">
            SOLID原則
          </ExternalLink>
          に従うことを強くお勧めします。
        </Hint>
      </Section>
      <Section>
        <Heading id={listOfContents[1].id} variant="h2">
          {listOfContents[1].title}
        </Heading>
        <p>
          まず、単純な<CodeSpan>CatsService</CodeSpan>
          を作成しましょう。このサービスはデータの保存と取得を担当し、
          <CodeSpan>CatsController</CodeSpan>
          で使用されるように設計されています。模範例として、このサービスをまずは最初にプロバイダとして定義してみます。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsCatsServiceSnippet}
          jsSnippet={jsCatsServiceSnippet}
        />
        <Hint>
          Nest CLIでサービスクラスを作成するには、
          <CodeSpan>nest g service cats</CodeSpan>を実行してください
        </Hint>
        <p>
          <CodeSpan>CatsService</CodeSpan>
          は、1つのプロパティと2つのメソッドを持つ基本的なクラスです。唯一の新しい機能は、
          <CodeSpan>@Injectable()</CodeSpan>
          デコレータを使用していることです。<CodeSpan>@Injectable()</CodeSpan>
          デコレータはメタデータ(<CodeSpan>CatsService</CodeSpan>がNest
          <ExternalLink href="https://en.wikipedia.org/wiki/Inversion_of_control">
            IoC
          </ExternalLink>
          コンテナによって管理できるクラスであることの印)をこのクラスに付与します。
          <br />
          ちなみに、この例ではサンプルのデータ型として、
          <CodeSpan>Cat</CodeSpan>
          インターフェースを使用しています。そのデータ型はだいたい次のようなものであると仮定して下さい:
        </p>
        <ToggleCodeBlock
          tsSnippet={tsCatInterfaceSnippet}
          jsSnippet={jsCatInterfaceSnippet}
        />
        <p>WORKING:</p>
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
