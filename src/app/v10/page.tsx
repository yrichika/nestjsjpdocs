'use client'

import CodeBlock from '@/components/atoms/CodeBlock'
import Hl from '@/components/atoms/Hl'
import V10PageTemplate from '@/components/templates/V10PageTemplate'
import { Link } from '@mui/material'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'

import CodeSpan from '@/components/atoms/CodeSpan'
import ExternalLink from '@/components/atoms/ExternalLink'
import Heading from '@/components/atoms/Heading'
import PageFooter from '@/components/atoms/PageFooter'
import Section from '@/components/atoms/Section'
import Hint from '@/components/molecules/Hint'
import { useEffect } from 'react'
import { listOfContents } from './listOfContents'
import {
  installManuallySnippet,
  installSnippet,
  installWithGitSnippet,
} from './snippets'

function IntroductionPage() {
  const originalLink = 'https://docs.nestjs.com/'
  const degitLink = 'https://github.com/Rich-Harris/degit'
  const localhostLink = 'http://localhost:3000/'

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <V10PageTemplate listOfContents={listOfContents}>
      <Section>
        <Heading id="introduction" variant="h1">
          Introduction
        </Heading>
        <p>
          Nest (NestJS) は効率的でスケーラブルな <Hl>Node.js</Hl>
          サーバーサイドアプリケーションを構築するためのフレームワークです。継続的に進化する
          JavaScript を使用し、
          <Hl>TypeScript</Hl>
          を完全にサポートしています（ただし、JavaScriptだけでコードを書くこともできます）。Nest
          は
          OOP（オブジェクト指向プログラミング）、FP（関数型プログラミング）、および
          FRP（関数型リアクティブプログラミング）を組み合わせて使うことができます。
        </p>
        <p>
          Nest の内部では、<Hl>Express</Hl>
          （デフォルト）などの堅牢な HTTP
          サーバーフレームワークを使用し、必要に応じて <Hl>Fastify</Hl>{' '}
          を使用するように構成することもできます。
        </p>
        <p>
          Nest はこれら一般的な Node.js
          フレームワーク（Express/Fastify）を抽象化したものを提供し、
          APIを公開しています。これにより、無数のサードパーティモジュールを、基盤のプラットフォーム(Express,
          Fastifyなど)向けに使用できます。
        </p>
      </Section>
      <Section>
        <Heading id="philosophy" variant="h2">
          Philosophy
        </Heading>
        <p>
          Node.jsのおかげでJavaScriptはWebのフロントエンドとバックエンドの両方のアプリケーションでの「共通言語」となりました。
          これにより、<Hl>Angular</Hl>、<Hl>React</Hl>、<Hl>Vue</Hl>
          などの素晴らしいプロジェクトが生まれ、開発者の生産性向上を実現し、高速かつ、テスト可能で、拡張可能なフロントエンドアプリケーションを作成できるようになりました。
          しかし、Node（およびサーバーサイドのJavaScript）向けに優れたライブラリや、ツールがたくさん存在している一方で、
          それらのほとんどはアプリケーションの <b>アーキテクチャ</b>
          の問題を効果的に解決していないのが現状です。
        </p>
        <p>
          Nestは、開発者に、テストしやすく、スケーラブル、
          疎結合で、メンテナンスしやすいアプリケーションを作成するための
          <b>アーキテクチャ</b>を提供します。
          このアーキテクチャはAngularから多くのインスピレーションを受けています。
        </p>
      </Section>
      <Section>
        <Heading id="installation" variant="h2">
          Installation
        </Heading>
        <p>
          Nestプロジェクトの作成には、Nest
          CLIを使用してプロジェクトを作成するか、テンプレートプロジェクトをクローンすることができます（どちらも同じ結果を生成します）。
        </p>
        <p>
          Nest
          CLIを使用してプロジェクトを作成するには、以下のコマンドを実行します。これにより、新しいプロジェクトディレクトリが作成され、初期のNestのコアファイルとサポートモジュールがディレクトリに配置され、プロジェクトの基本構造が作成されます。Nest
          を初めて使うユーザーの場合は、CLIを使用して新しいプロジェクトを作成することをおすすめします。
          次のステップの<Link href="v10/first-steps">First Steps</Link>
          では、この方法での解説になります。
        </p>
        <CodeBlock lang={installSnippet.lang}>{installSnippet.code}</CodeBlock>
        <Hint>
          新しいプロジェクトをより厳格なTypeScriptの型チェック設定で作成するには、
          <CodeSpan>nest new</CodeSpan>コマンドに<CodeSpan>--strict</CodeSpan>
          フラグを渡します。
        </Hint>
      </Section>
      <Section>
        <Heading id="alternatives" variant="h2">
          Alternatives
        </Heading>
        <p>
          <CodeSpan>nest new</CodeSpan>
          とは別の、TypeScriptのテンプレートプロジェクトをGitでインストールする方法です。
        </p>
        <CodeBlock lang={installWithGitSnippet.lang}>
          {installWithGitSnippet.code}
        </CodeBlock>
        <Hint>
          Gitの履歴を含まずにリポジトリをクローンしたい場合は、選択肢の1つとして
          <ExternalLink href={degitLink}>degit</ExternalLink>{' '}
          を使用してください。
        </Hint>
      </Section>
      <Section>
        <p>
          ブラウザを開いて、
          <ExternalLink href={localhostLink}>{localhostLink}</ExternalLink>
          にアクセスしてみて下さい。
        </p>
        <p>
          テンプレートプロジェクトのJavaScriptバージョンをインストールするには、上記のコマンドのリポジトリ名を{' '}
          <CodeSpan>javascript-starter.git</CodeSpan> に指定します。
        </p>
        <p>
          また、<b>npm</b>（または<b>yarn</b>
          ）を使用してNestのコアファイルとサポートファイルを手動でインストールし、
          ゼロから新しいプロジェクトを作成することもできます。
          この場合、プロジェクトの基本となる構成ファイルは、自身で作成する必要があります。
        </p>
        <CodeBlock lang={installManuallySnippet.lang}>
          {installManuallySnippet.code}
        </CodeBlock>
      </Section>
      <PageFooter>
        Translated from{' '}
        <ExternalLink href={originalLink}>{originalLink}</ExternalLink>
      </PageFooter>
    </V10PageTemplate>
  )
}

export default IntroductionPage
