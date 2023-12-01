'use client'

import CodeBlock from '@/components/atoms/CodeBlock'
import CodeSpan from '@/components/atoms/CodeSpan'
import ExternalLink from '@/components/atoms/ExternalLink'
import FileTree from '@/components/atoms/FileTree'
import Heading from '@/components/atoms/Heading'
import Hl from '@/components/atoms/Hl'
import PageFooter from '@/components/atoms/PageFooter'
import Section from '@/components/atoms/Section'
import Hint from '@/components/molecules/Hint'
import ToggleCodeBlock from '@/components/molecules/ToggleCodeBlock'
import V10PageTemplate from '@/components/templates/V10PageTemplate'
import { Box, Link } from '@mui/material'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import { useEffect } from 'react'
import TableBaseFileDescriptions from './TableBaseFileDescriptions'
import TablePlatforms from './TablePlatforms'
import { listOfContents } from './listOfContents'
import {
  createAppSnippet,
  installSnippet,
  lintSnippet,
  mainJsSnippet,
  mainTsSnippet,
  startAppSnippet,
  watchDevSnippet,
} from './snippets'

function FirstStepsPage() {
  const originalLink = 'https://docs.nestjs.com/first-steps'
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <V10PageTemplate listOfContents={listOfContents}>
      <Section>
        <Heading id={listOfContents[0].id} variant="h1">
          {listOfContents[0].title}
        </Heading>
        <p>
          この記事では、Nestの基本 (<b>core fundamentals</b>)を学びます。
          Nestアプリケーションの基本的な構成要素に慣れるために、基本的なCRUDアプリケーションを構築しながら、初心者向けに、多くの領域をカバーする機能を紹介します。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[1].id} variant="h2">
          {listOfContents[1].title}
        </Heading>
        <p>
          NestはTypeScriptと純粋なJavaScriptの両方と互換性があります。
          Nestは最新の言語機能を活用しているため、純粋なJavaScriptで使用するにはBabelコンパイラが必要です。
        </p>
        <p>
          このドキュメントで説明する例では、主にTypeScriptを使用しますが、コードスニペットをいつでも純粋なJavaScript構文に切り替えることができます（各スニペットの右上隅にある言語ボタンをクリックして言語を切り替えてください）。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[2].id} variant="h2">
          {listOfContents[2].title}
        </Heading>
      </Section>
      <p>
        事前にOSに<Hl>Node.js</Hl>
        (version&gt;=16)をインストールしておいて下さい。
      </p>
      <Section>
        <Heading id={listOfContents[3].id} variant="h2">
          {listOfContents[3].title}
        </Heading>
        <p>
          <Hl>Nest CLI</Hl>
          を使用して新しいプロジェクトをセットアップするのは非常に簡単です。
          <Hl>npm</Hl>
          がインストールされている場合、OSのターミナルで次のコマンドを使用して新しいNestプロジェクトを作成できます:
        </p>
        <CodeBlock lang={installSnippet.lang}>{installSnippet.code}</CodeBlock>
        <Hint>
          新しいプロジェクトをより厳格なTypeScriptの型チェック設定で作成するには、
          <CodeSpan>nest new</CodeSpan>コマンドに<CodeSpan>--strict</CodeSpan>
          フラグを渡します。
        </Hint>
        <p>
          <CodeSpan>project-name</CodeSpan>
          のディレクトリが作成され、ノードモジュールおよびいくつかのボイラープレートファイルがインストールされます。
          そして、<CodeSpan>src/</CodeSpan>
          ディレクトリが作成され、いくつかのコアファイルが配置されます。
        </p>
        <Box>
          <FileTree>
            <ul>
              <li>
                src
                <ul>
                  <li>app.controller.spec.ts</li>
                  <li>app.controller.ts</li>
                  <li>app.module.ts</li>
                  <li>app.service.ts</li>
                  <li>main.ts</li>
                </ul>
              </li>
            </ul>
          </FileTree>
        </Box>
        <p>インストール時に作成された上記のファイルの簡単な概要です</p>

        <TableBaseFileDescriptions />
        <p>
          <CodeSpan>main.ts</CodeSpan>
          の中のasync関数が実行されることによってアプリケーションを開始(
          <b>bootstrap</b>)します。
        </p>
        <ToggleCodeBlock tsSnippet={mainTsSnippet} jsSnippet={mainJsSnippet} />
        <p>
          Nestアプリケーションインスタンスを作成するには、
          <CodeSpan>NestFactory</CodeSpan>のコアクラスを使用します。
          <CodeSpan>NestFactory</CodeSpan>
          はアプリケーションインスタンスを作成するためのいくつかの静的メソッドを公開しています。
          <CodeSpan>create()</CodeSpan>メソッドは
          <CodeSpan>INestApplication</CodeSpan>
          インターフェースを満たすアプリケーションオブジェクトを返します。
          このオブジェクトは、次の章で説明される一連のメソッドを提供します。
          上記の<CodeSpan>main.ts</CodeSpan>
          の例では、単純にHTTPリスナーを起動し、アプリケーションが受信HTTPリクエストを待機できるようにしています。
        </p>
        <p>
          Nest
          CLIで作成した初期のプロジェクトファイルの構成は、各モジュールを独自のディレクトリごとに分けるように構成されています。
          この構造に従って、モジュールごとでディレクトリを分けるようにファイルの配置を構成することをお勧めします。
        </p>
        <Hint>
          デフォルトでは、アプリケーションの作成中にエラーが発生した場合、アプリケーションはコード
          <CodeSpan>1</CodeSpan>で終了します。
          代わりにエラーをスローさせたい場合は、オプション
          <CodeSpan>abortOnError</CodeSpan>を無効にすることもできます。
          <br />
          例:{' '}
          <CodeSpan>
            {`NestFactory.create(AppModule, { abortOnError: false })`}
          </CodeSpan>
        </Hint>
      </Section>
      <Section>
        <Heading id={listOfContents[4].id} variant="h2">
          {listOfContents[4].title}
        </Heading>
        <p>
          Nestはプラットフォームに依存しないフレームワークを目指しています。
          プラットフォームの独立性により、さまざまな種類のアプリケーションで、再利用可能なパーツを作成できます。
          技術的にはNestは、アダプタさえ作成すれば、任意のNode
          HTTPフレームワークと連携できます。デフォルトでサポートされている2つのHTTPプラットフォームは
          <Hl>express</Hl>と<Hl>fastify</Hl>です。
          必要に応じて、最適なものが選択可能です。
        </p>
        <TablePlatforms />
        <p>
          どちらのプラットフォームを使用しても、それぞれ別のアプリケーションインターフェースが利用できます。
          これらはそれぞれ<CodeSpan>NestExpressApplication</CodeSpan>と
          <CodeSpan>NestFastifyApplication</CodeSpan>として表示されます。
        </p>
        <p>
          以下の例のように<CodeSpan>NestFactory.create()</CodeSpan>
          メソッドに型を渡すと、<CodeSpan>app</CodeSpan>
          オブジェクトには特定のプラットフォームに固有のメソッドが利用可能になります。
          ただし、
          <b>
            基礎プラットフォームのAPIにアクセスする場合を
            除いて、型を指定する必要はありません
          </b>
          。
        </p>
        <CodeBlock lang={createAppSnippet.lang}>
          {createAppSnippet.code}
        </CodeBlock>
      </Section>
      <Section>
        <Heading id={listOfContents[5].id} variant="h2">
          {listOfContents[5].title}
        </Heading>
        <p>
          インストールが完了したら、次のコマンドをOSのコマンドプロンプトで実行して下さい。
          アプリケーションがHTTPリクエストの待ち受け状態になります。
        </p>
        <CodeBlock lang={startAppSnippet.lang}>
          {startAppSnippet.code}
        </CodeBlock>
        <Hint>
          <CodeSpan>start</CodeSpan>スクリプトに <CodeSpan>-b swc</CodeSpan>
          フラグを渡して <Link href="recipes/swc">SWC Builder</Link>
          を使用することで、開発プロセスを高速化（ビルド速度を20倍高速化）できます。
          具体的には、次のコマンドを実行します:{' '}
          <CodeSpan>npm run start -- -b swc</CodeSpan>.
        </Hint>
        <p>
          このコマンドを実行すると、<CodeSpan>src/main.ts</CodeSpan>
          で指定したポートでHTTPサーバーが起動します。
          アプリケーションが起動したら、ブラウザを開いて{' '}
          <ExternalLink href="http://localhost:3000/">
            http://localhost:3000/
          </ExternalLink>{' '}
          へ移動してください。 「Hello World!」
          というメッセージが表示されているはずです。
        </p>
        <p>
          開発環境でファイルの更新を検知して、自動的にアプリケーションを更新(watch)させるには、以下のコマンドを実行してください。
        </p>
        <CodeBlock lang={watchDevSnippet.lang}>
          {watchDevSnippet.code}
        </CodeBlock>
        <p>
          このコマンドによって、ファイルの変更に伴い、自動的にコードが再コンパイルされ、
          サーバーが更新されます。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[6].id} variant="h2">
          {listOfContents[6].title}
        </Heading>
        <p>
          CLIは、規模が大きく、信頼性のある開発ワークフローを実現するために、できる限りのサポートを行います。
          そのため、生成されたNestプロジェクトにはコードの<b>リンター</b>と
          <b>フォーマッター</b>
          （それぞれ
          <ExternalLink href="https://eslint.org/">eslint</ExternalLink>と
          <ExternalLink href="https://prettier.io/">prettier</ExternalLink>）が
          事前にインストールされています。
        </p>
        <Hint>
          フォーマッターとリンターの役割がいまいち確かでない方は、
          <ExternalLink href="https://prettier.io/docs/en/comparison.html">
            こちら
          </ExternalLink>
          を参考にしてください。
        </Hint>
        <p>
          最大の安定性と拡張性を確保するために、
          <ExternalLink href="https://www.npmjs.com/package/eslint">
            eslint
          </ExternalLink>
          と
          <ExternalLink href="https://www.npmjs.com/package/prettier">
            prettier
          </ExternalLink>
          のベースcliパッケージを使用しています。
          このセットアップにより、公式の拡張機能とスムーズなIDE統合が可能になります。
        </p>
        <p>
          IDEが関連しないヘッドレス環境（継続的インテグレーション、Gitフックなど）のためには、
          Nestプロジェクトでは、<CodeSpan>npm</CodeSpan>
          スクリプトを用意しています。
        </p>
        <CodeBlock lang={lintSnippet.lang}>{lintSnippet.code}</CodeBlock>
      </Section>
      <PageFooter>
        Translated from{' '}
        <ExternalLink href={originalLink}>{originalLink}</ExternalLink>
      </PageFooter>
    </V10PageTemplate>
  )
}

export default FirstStepsPage
