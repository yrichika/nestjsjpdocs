'use client'
import CodeBlock from '@/components/atoms/CodeBlock'
import CodeSpan from '@/components/atoms/CodeSpan'
import ExternalLink from '@/components/atoms/ExternalLink'
import Heading from '@/components/atoms/Heading'
import Hl from '@/components/atoms/Hl'
import PageFooter from '@/components/atoms/PageFooter'
import Section from '@/components/atoms/Section'
import Hint from '@/components/molecules/Hint'
import ToggleCodeBlock from '@/components/molecules/ToggleCodeBlock'
import Warning from '@/components/molecules/Warning'
import V10PageTemplate from '@/components/templates/V10PageTemplate'
import commonStyles from '@/styles/common.module.scss'
import { Link, Typography } from '@mui/material'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import { useEffect } from 'react'
import TableRequestObjects from './TableRequestObjects'
import TableResponseManipulationOptions from './TableResponseManipulationOptions'
import { listOfContents } from './listOfContents'
import {
  controllerHostOptionParamSnippet,
  controllerHostOptionSnippet,
  headerSnippet,
  jsCatsControllerSnippet,
  jsControllerSampleSnippet,
  jsCreateCatHandler,
  jsDtoSnippet,
  jsDtoUsageSnippet,
  jsLibrarySpecificCompatibilitySnippet,
  jsObservableSnippet,
  jsPromiseSnippet,
  jsRegisterToModuleSnippet,
  jsRequestObjectSnippet,
  jsRouteParametersNameSpecifiedSnippet,
  jsRouteParametersSnippet,
  jsWithResponseObjectSnippet,
  patternMatchingSnippet,
  redirectOverrideSnippet,
  redirectSnippet,
  statusCodeSnippet,
  tsCatsControllerSnippet,
  tsControllerSampleSnippet,
  tsCreateCatHandler,
  tsDtoSnippet,
  tsDtoUsageSnippet,
  tsLibrarySpecificCompatibilitySnippet,
  tsObservableSnippet,
  tsPromiseSnippet,
  tsRegisterToModuleSnippet,
  tsRequestObjectSnippet,
  tsRouteParametersNameSpecifiedSnippet,
  tsRouteParametersSnippet,
  tsWithResponseObjectSnippet,
} from './snippets'

function ControllersPage() {
  const originalLink = 'https://docs.nestjs.com/controllers'
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
          コントローラーは、受信したリクエストを処理し、クライアントへのレスポンスを返す役割を担います。
        </p>
        <figure className={commonStyles.externalImage}>
          {/* TODO: イメージは自分で作ったものに置き換えること size:970x420 */}
          <img src="https://docs.nestjs.com/assets/Controllers_1.png" />
          <figcaption>
            <Typography variant="caption">
              image from https://docs.nestjs.com/controllers
            </Typography>
          </figcaption>
        </figure>
        <p>
          コントローラーの役割は、アプリケーションに対する特定のリクエストを受け取ることです。
          <b>ルーティング機能(routing)</b>
          によって、どのコントローラーがどのリクエストを受け取るかを制御します。
          通常、各コントローラーには複数のパスがあり、それぞれのパスで異なる処理を実行できます。
        </p>
        <p>
          基本的なコントローラーを作成するには、クラスと<b>デコレーター</b>
          を使用します。
          デコレーターがクラスにメタデータを関連付けることで、Nestはルーティングマップ（リクエストを対応するコントローラーに紐づけたもの）を作成します。
        </p>
        <Hint>
          <Link href="techniques/validation">バリデーション</Link>
          が組み込まれたCRUDのコントローラーを手っ取り早く作成したい場合は、
          Nest CLIの
          <Link href="recipes/crud-generator#crud-generator">
            CRUDジェネレーター
          </Link>
          が利用できます: <CodeSpan>nest g resource [name]</CodeSpan>。
        </Hint>
      </Section>
      <Section>
        <Heading id={listOfContents[1].id} variant="h2">
          {listOfContents[1].title}
        </Heading>
        <p>
          以下の例では、<b>基本的なコントローラーを定義するために必要な</b>{' '}
          <CodeSpan>@Controller()</CodeSpan>デコレーターを使用しています。
          デコレーターの引数(オプション)に、パスの接頭辞(パスプレフィックス)として{' '}
          <CodeSpan>cats</CodeSpan> を指定しています。
          <CodeSpan>@Controller()</CodeSpan>
          デコレーターでのパスプレフィックスの指定は、関連するパスをグループ化し、重複コードを最小限に抑えることができます。
          例えば、Catというエンティティを操作する一連のパスを{' '}
          <CodeSpan>/cats</CodeSpan> の下にグループ化する場合を想定して下さい。
          その場合、
          <CodeSpan>@Controller()</CodeSpan> デコレーターでパスプレフィックスに
          <CodeSpan>cats</CodeSpan>{' '}
          を指定すれば、それぞれのパスで同じ文字列を繰り返し指定する必要がなくなります。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsCatsControllerSnippet}
          jsSnippet={jsCatsControllerSnippet}
        />
        <Hint>
          CLIを使えば、次のコマンドを実行するだけでコントローラーが作れます:{' '}
          <CodeSpan>nest g controller [name]</CodeSpan>
        </Hint>
        <p>
          <CodeSpan>findAll()</CodeSpan>メソッドの前の
          <CodeSpan>@Get()</CodeSpan>デコレーターは、
          特定のHTTPリクエストに対応したエンドポイントにハンドラ(=処理、具体的にはメソッド)を割り当てます。
          このエンドポイントは、指定したパスとHTTPのリクエストメソッド（この場合は
          GET）を対応付けされたものになります。
          コントローラーで指定した（オプションの）プレフィックスと、メソッドのデコレーターの引数で指定された任意のパス文字列を連結したものが、1つのエンドポイントのパスとして定義されます。
          ここでは、コントローラーに<CodeSpan>cats</CodeSpan>
          プレフィックスを宣言しましたが、 <CodeSpan>@Get</CodeSpan>
          デコレーターに追加のパス文字列を指定していないので、Nest は{' '}
          <CodeSpan>GET /cats</CodeSpan>{' '}
          宛のリクエストをこのハンドラに対応させます。
          前述しましたが、パスにはコントローラーに設定したデコレーターのオプションのプレフィックスと、メソッドに設定したデコレーターで指定した文字列が連結されます。例えば、
          <CodeSpan>cats</CodeSpan> というプレフィックス(
          <CodeSpan>@Controller&lsquo;cats&rsquo;)</CodeSpan>)と
          メソッドのデコレーター<CodeSpan>@Get(&lsquo;breed&rsquo;)</CodeSpan>
          を組み合わせると、
          <CodeSpan>GET /cats/breed</CodeSpan> というパスが生成されます。
        </p>
        <p>
          上記の例では、このエンドポイントに対してGETリクエストが行われると、
          Nestはリクエストを<CodeSpan>findAll()</CodeSpan>
          メソッドにルーティングします。
          ここで選択したメソッド名は任意で問題ありません。当然ながら、パスと紐付けるメソッド自体は宣言する必要がありますが、
          メソッド名については、完全に自由な名前を定義できます。
        </p>
        <p>
          このメソッドは、200のステータスコードとセットとなるデータの文字列をレスポンスとして返します。
          このレスポンスを操作するための仕組みは、<b>2つのオプション</b>
          が利用・選択できます。
        </p>
        <TableResponseManipulationOptions />
        <Warning>
          Nestは、<CodeSpan>@Res()</CodeSpan>または<CodeSpan>@Next()</CodeSpan>{' '}
          がメソッドの引数に利用されている場合、Nestはライブラリ固有のオプションを選択されたと解釈します。もし両方の仕組みをを同時に使用する場合、
          <b>Standardは自動的に無効になり</b>、期待どおりに機能しなくなります。
          同時に両方のアプローチを使用するには（たとえば、レスポンスオブジェクト(ライブラリ固有)はクッキー・ヘッダーの設定のみを行い、残りの処理をフレームワーク(Standard)に委ねる場合など）、
          <CodeSpan>{'@Res({ passthrough: true })'}</CodeSpan>デコレータで{' '}
          <CodeSpan>passthrough</CodeSpan> オプションを{' '}
          <CodeSpan>true</CodeSpan> に設定する必要があります。
        </Warning>
      </Section>
      <Section>
        <Heading id={listOfContents[2].id} variant="h2">
          {listOfContents[2].title}
        </Heading>
        <p>
          ハンドラはしばしばクライアントのリクエストの詳細にアクセスする必要があります。Nestは基盤プラットフォーム（デフォルトではExpress）の
          <ExternalLink href="https://expressjs.com/en/api.html#req">
            リクエストオブジェクト
          </ExternalLink>
          へのアクセスを提供します。<CodeSpan>@Req()</CodeSpan>
          デコレータをメソッドの引数に追加することで、Nestはリクエストオブジェクトを注入し、リクエストオブジェクトにアクセスすることができます。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsRequestObjectSnippet}
          jsSnippet={jsRequestObjectSnippet}
        />
        <Hint>
          Expressの型を利用するには（前述の例のように{' '}
          <CodeSpan>request: Request</CodeSpan>パラメータの場合）、
          <CodeSpan>@types/express</CodeSpan>{' '}
          パッケージをインストールしてください。
        </Hint>
        <p>
          リクエストオブジェクトは
          HTTPリクエストを表現しており、リクエストのクエリ文字列、パラメータ、HTTP
          ヘッダー、およびボディのプロパティがあります（詳細は
          <ExternalLink href="https://expressjs.com/en/api.html#req">
            こちら
          </ExternalLink>
          を参照してください）。
          ほとんどの場合、これらのプロパティを直接取得する必要はありません。代わりに、
          <CodeSpan>@Body()</CodeSpan>や <CodeSpan>@Query()</CodeSpan>
          などの組み込みのデコレータを使用できます。以下は提供されているデコレータとそれらが表す元のプラットフォーム固有のオブジェクトの一覧です。
        </p>
        <TableRequestObjects />
        <p>
          ※
          Nestは基盤HTTPプラットフォーム（例：ExpressおよびFastify）との型の互換性のために、
          <CodeSpan>@Res()</CodeSpan>および<CodeSpan>@Response()</CodeSpan>
          デコレータを提供しています。<CodeSpan>@Res()</CodeSpan> は単に
          <CodeSpan>@Response()</CodeSpan>{' '}
          のエイリアスです。どちらも基盤プラットフォームの
          <CodeSpan>response</CodeSpan>
          オブジェクトのインターフェースに直接アクセスできるようにしています。これらを使用する際には、基盤となるライブラリの型（例：
          <CodeSpan>@types/express</CodeSpan>
          ）もインポートすることで、より活用できます。 注意点として、メソッドで{' '}
          <CodeSpan>@Res()</CodeSpan> または <CodeSpan>@Response()</CodeSpan>{' '}
          を利用すると、そのメソッドでは、Nestは<b>ライブラリ固有のモード</b>
          になり、レスポンスの処理はユーザー自身が書く必要があります。これを行う際には、レスポンスオブジェクトに対する呼び出し（
          <CodeSpan>res.json(...)</CodeSpan>、<CodeSpan>res.send(...)</CodeSpan>
          など）を利用してください。そうしないと、HTTPサーバーは停止してしまいます。
        </p>
        <Hint>
          カスタムのデコレータを自作する方法については、
          <Link href="custom-decorators">こちらの章</Link>を参照してください。
        </Hint>
      </Section>
      <Section>
        <Heading id={listOfContents[3].id} variant="h2">
          {listOfContents[3].title}
        </Heading>
        <p>
          ここまでに、私たちはcatsエンティティのデータを取得するためのエンドポイント（
          <b>GET</b>
          ルート）を定義しました。多くの場合、新しいレコードを作成するエンドポイントも提供したいと考えるでしょう。そのために、
          <b>POST</b>ハンドラを作成しましょう。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsCreateCatHandler}
          jsSnippet={jsCreateCatHandler}
        />
        <p>
          上記のようにとても簡単に作成できます。Nestは、標準的なHTTPメソッドすべてに対応するデコレータを提供しています：
          <CodeSpan>@Get()</CodeSpan>、<CodeSpan>@Post()</CodeSpan>、
          <CodeSpan>@Put()</CodeSpan>、<CodeSpan>@Delete()</CodeSpan>、
          <CodeSpan>@Patch()</CodeSpan>、<CodeSpan>@Options()</CodeSpan>、および
          <CodeSpan>@Head()</CodeSpan>。さらに、<CodeSpan>@All()</CodeSpan>
          はそれらすべてを処理するエンドポイントを定義できます。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[4].id} variant="h2">
          {listOfContents[4].title}
        </Heading>
        <p>
          文字列のパターンによるルートもサポートされています。たとえば、アスタリスクはワイルドカードとして使用され、任意の文字の組み合わせに一致します。
        </p>
        <CodeBlock lang={patternMatchingSnippet.lang}>
          {patternMatchingSnippet.code}
        </CodeBlock>
        <p>
          <CodeSpan>&apos;ab*cd&apos;</CodeSpan>パスは、
          <CodeSpan>abcd</CodeSpan>、<CodeSpan>ab_cd</CodeSpan>、
          <CodeSpan>abecd</CodeSpan>
          などに一致します。文字の
          <CodeSpan>?</CodeSpan>、<CodeSpan>+</CodeSpan>、<CodeSpan>*</CodeSpan>
          、 および
          <CodeSpan>()</CodeSpan>
          はパスで使用でき、これらはそれぞれ同じ用途で利用される正規表現に対応します。ハイフン
          (<CodeSpan>-</CodeSpan>) とドット (<CodeSpan>.</CodeSpan>)
          は、パスの文字列として解釈されます。
        </p>
        <Warning>
          パスの中にワイルドカードを書くことは、expressでのみサポートされています。
        </Warning>
      </Section>
      <Section>
        <Heading id={listOfContents[5].id} variant="h2">
          {listOfContents[5].title}
        </Heading>
        <p>
          前述のしましたが、応答<b>ステータスコード</b>はデフォルトで常に
          <b>200</b>ですが、POSTリクエストの場合は<b>201</b>です。
          <CodeSpan>@HttpCode(...)</CodeSpan>
          デコレータをハンドラーに追加することで、この動作を簡単に変更することができます。
        </p>
        <CodeBlock lang={statusCodeSnippet.lang}>
          {statusCodeSnippet.code}
        </CodeBlock>
        <Hint>
          <CodeSpan>HttpCode</CodeSpan>は<CodeSpan>@nestjs/common</CodeSpan>
          パッケージからインポートして下さい。
        </Hint>
        <p>
          場合によっては、ステータスコードは固定ではなく、状況によって変更させたい時もあります。その場合、ライブラリ固有のレスポンスオブジェクト（
          <CodeSpan>@Res()</CodeSpan>
          を使用して取得）を使用することで変更させることができます（またはエラーの場合は例外を投げます）。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[6].id} variant="h2">
          {listOfContents[6].title}
        </Heading>
        <p>
          カスタムのレスポンスヘッダーを指定するには、
          <CodeSpan>@Header()</CodeSpan>
          デコレーターを使用するか、ライブラリ固有のレスポンスオブジェクトを使用して直接
          <CodeSpan>res.header()</CodeSpan>を呼び出します。
        </p>
        <CodeBlock lang={headerSnippet.lang}>{headerSnippet.code}</CodeBlock>
        <Hint>
          <CodeSpan>Header</CodeSpan>は、<CodeSpan>@nestjs/common</CodeSpan>
          パッケージからインポートして下さい。
        </Hint>
      </Section>
      <Section>
        <Heading id={listOfContents[7].id} variant="h2">
          {listOfContents[7].title}
        </Heading>
        <p>
          特定のURLにレスポンスをリダイレクトするには、
          <CodeSpan>@Redirect()</CodeSpan>
          デコレーターを使用するか、ライブラリ固有のレスポンスオブジェクトを使用して直接
          <CodeSpan>res.redirect()</CodeSpan>を呼び出します。
          <CodeSpan>@Redirect()</CodeSpan>は2つの引数、<CodeSpan>url</CodeSpan>
          と<CodeSpan>statusCode</CodeSpan>
          を取りますが、どちらもオプションです。省略された場合、
          <CodeSpan>statusCode</CodeSpan>のデフォルト値は
          <CodeSpan>302</CodeSpan>（<CodeSpan>Found</CodeSpan>）です。
        </p>
        <CodeBlock snippet={redirectSnippet} />
        <Hint>
          HTTPステータスコード、またはリダイレクトURLを動的に決定したい場合は、
          <CodeSpan>@nestjs/common</CodeSpan>の
          <CodeSpan>HttpRedirectResponse</CodeSpan>
          インターフェースに従ったオブジェクトを返します。
        </Hint>
        <p>
          メソッドの戻り値に指定する値によって、<CodeSpan>@Redirect()</CodeSpan>
          に指定した引数の値を上書きすることもできます。例として:{' '}
        </p>
        <CodeBlock snippet={redirectOverrideSnippet} />
      </Section>
      <Section>
        <Heading id={listOfContents[8].id} variant="h2">
          {listOfContents[8].title}
        </Heading>
        <p>
          固定のパスが設定されたルートは、リクエストの一部に<b>動的なデータ</b>
          が入力された場合には機能しません（例：<CodeSpan>GET /cats/1</CodeSpan>
          で、idが<CodeSpan>1</CodeSpan>
          のcatを取得する）。ルートに動的なパラメータを受け入れるためには、URLの特定の位置で、パスに
          <b>パラメータトークン</b>を追加します。下記の例では、
          <CodeSpan>@Get()</CodeSpan>
          デコレータにパラメータトークンを指定いています。この方法で宣言されたルートパラメータは、
          <CodeSpan>@Param()</CodeSpan>
          デコレータを使用してメソッドの引数に追加することで、アクセスすることができます。
        </p>
        <Hint>
          パラメータを持つ動的なパスは、固定パスの後に宣言する必要があります。
          こうすることで、動的パスが、固定パスに向けられたトラフィックを妨げないようになります。
        </Hint>
        <ToggleCodeBlock
          tsSnippet={tsRouteParametersSnippet}
          jsSnippet={jsRouteParametersSnippet}
        />
        <p>
          <CodeSpan>@Param()</CodeSpan> でメソッドの引数（上記の例では{' '}
          <CodeSpan>params</CodeSpan>
          ）を修飾することで、ルートパラメータはその引数のオブジェクトのプロパティとして利用できるようになります。上記のコードのように、
          <CodeSpan>params.id</CodeSpan>と参照して <CodeSpan>id</CodeSpan>
          パラメータにアクセスできます。また、デコレータにパラメータトークンを指定することで、そのメソッドの引数から、直接パラメータを参照することもできます。
        </p>
        <Hint>
          <CodeSpan>Param</CodeSpan>は<CodeSpan>@nestjs/common</CodeSpan>
          パッケージからインポートして下さい。
        </Hint>
        <ToggleCodeBlock
          tsSnippet={tsRouteParametersNameSpecifiedSnippet}
          jsSnippet={jsRouteParametersNameSpecifiedSnippet}
        />
      </Section>
      <Section>
        <Heading id={listOfContents[9].id} variant="h2">
          {listOfContents[9].title}
        </Heading>
        <p>
          <CodeSpan>@Controller</CodeSpan> デコレータは{' '}
          <CodeSpan>host</CodeSpan>
          オプションを取ることができ、リクエストした
          ホストが特定の値と一致する必要があります。
        </p>
        <CodeBlock snippet={controllerHostOptionSnippet} />
        <Warning>
          <Hl>Fastify</Hl>
          はネストされたルーターをサポートしていないため、サブドメインルーティングを使用する場合は、
          （デフォルトの）Expressアダプターを代わりに使用する必要があります。
        </Warning>
        <p>
          パス内にトークンを使ったのと同様に、
          <CodeSpan>host</CodeSpan>
          オプションは、ホスト名内にトークンを指定して、その位置で動的な値を取得できます。以下は、
          <CodeSpan>@Controller()</CodeSpan>
          デコレーターに、ホストパラメータートークンを使用した例です。この方法で宣言されたホストパラメーターは、メソッドの引数に
          <CodeSpan>@HostParam()</CodeSpan>
          デコレーターを使用することで、その値にアクセスできます。
        </p>
        <CodeBlock snippet={controllerHostOptionParamSnippet} />
      </Section>
      <Section>
        <Heading id={listOfContents[10].id} variant="h2">
          {listOfContents[10].title}
        </Heading>
        <p>
          異なるプログラミング言語のバックグラウンドから来た人にとって、Nestでは、ほぼすべてのリソースが着信リクエスト全体で共有(シングルトンスコープ)されることは予想外かもしれません。データベースへの接続プール、グローバルステートを持つシングルトンサービスなどがあります。Node.jsはリクエスト/レスポンスのマルチスレッド・ステートレスモデルに従っておらず、各リクエストが別々のスレッドで処理されません。そのため、シングルトンのインスタンスを使用することは、アプリケーションにとって
          <b>安全です</b>。
        </p>
        <p>
          ただし、例外として、シングルトンではなく、リクエスト単位でのリソースの寿命が望ましいケースとしては、GraphQLアプリケーションでのリクエストごとのキャッシュ、リクエストのトラッキング、またはマルチテナンシーなどがあります。スコープを制御する方法については、
          <Link href="fundamentals/injection-scopes">こちら</Link>
          を参照してください。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[11].id} variant="h2">
          {listOfContents[11].title}
        </Heading>
        <p>
          私たちはモダンなJavaScriptが好きであり、そしてデータの取り出しは主に
          <b>非同期</b>です。 そのため、Nestは非同期関数
          <CodeSpan>async</CodeSpan>をサポートし、それと上手く連携できます。
        </p>
        <Hint>
          <CodeSpan>async</CodeSpan> / <CodeSpan>await</CodeSpan>
          をより詳しく知りたい方は
          <ExternalLink href="https://kamilmysliwiec.com/typescript-2-1-introduction-async-await">
            こちら
          </ExternalLink>
          を参考にして下さい。
        </Hint>
        <ToggleCodeBlock
          tsSnippet={tsPromiseSnippet}
          jsSnippet={jsPromiseSnippet}
        />
        <p>
          上記のコードはそのまま動作可能です。それに加えて、Nestのハンドラは、RxJSの
          <ExternalLink href="https://reactivex.io/rxjs/class/es6/Observable.js~Observable.html">
            observableストリーム
          </ExternalLink>
          を返すことができるため、非常に強力です。
          Nestはpublish/subscribeモデルのデータソースに自動的にsubscribeし、ストリームが完了したら、最後に発行された値を取得します。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsObservableSnippet}
          jsSnippet={jsObservableSnippet}
        />
        <p>
          上記の2つの方法はどちらも機能するため、要件に合ったものを選択してください。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[12].id} variant="h2">
          {listOfContents[12].title}
        </Heading>
        <p>
          前述のPOSTハンドラの例では、パラメーターを受け入れていませんでした。これを修正するために、ここに
          <CodeSpan>@Body()</CodeSpan>デコレーターを追加しましょう。
        </p>
        <p>
          しかし、まず（TypeScriptを使用している場合）、<b>DTO</b>（Data
          Transfer Object）スキーマを定義する必要があります。
          DTOは、ネットワーク経由で送信されるデータのオブジェクトです。{' '}
          <b>TypeScript</b>のインターフェースを使用するか、シンプルな
          <b>クラス</b>
          を使用してDTOスキーマを定義できます。以外かもしれませんが、ここではクラスの使用をお勧めしています。なぜなら、クラスはJavaScript
          ES6標準の一部であり、したがってコンパイルされた後のJavaScriptで、実体として保持されるためです。
          一方で、TypeScriptのインターフェースはトランスパイル中に削除されるため、Nestはそれらをランタイム中で参照できません。ここには大きな違いがあります。なぜなら、
          ランタイム中に変数のメタタイプにアクセスできると、<b>Pipes</b>
          などの機能が使え、さらなる可能性が広がるからです。
        </p>
        <p>
          <CodeSpan>CreateCatDto</CodeSpan>DTOクラスを例で作ってみましょう。
        </p>
        <ToggleCodeBlock tsSnippet={tsDtoSnippet} jsSnippet={jsDtoSnippet} />
        <p>
          それは三つの基本的なプロパティを持っています。 新しく作成したDTOは
          <CodeSpan>CatsController</CodeSpan>で使用できます。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsDtoUsageSnippet}
          jsSnippet={jsDtoUsageSnippet}
        />
        <Hint>
          <CodeSpan>ValidationPipe</CodeSpan>
          は、ハンドラで受信すべきでないプロパティをフィルタリングできます。この場合、受け入れ可能なプロパティをホワイトリストに登録し、ホワイトリストに含まれていないプロパティは、結果のオブジェクトから自動的に削除されます。
          <CodeSpan>CreateCatDto</CodeSpan>の例では、ホワイトリストには
          <CodeSpan>name</CodeSpan>、<CodeSpan>age</CodeSpan>、および
          <CodeSpan>breed</CodeSpan>のプロパティが含まれています。詳細は
          <Link href="techniques/validation#stripping-properties">こちら</Link>
          を参照してください。
        </Hint>
      </Section>
      <Section>
        <Heading id={listOfContents[13].id} variant="h2">
          {listOfContents[13].title}
        </Heading>
        <p>
          エラーの処理に関する情報(例外処理など)は、
          <Link href="exception-filters">こちら</Link>の章で説明しています。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[14].id} variant="h2">
          {listOfContents[14].title}
        </Heading>
        <p>
          以下は、基本的なデコレータを使用してコントローラを作成する例です。このコントローラは、受信したデータにアクセスし、それを操作するメソッドを公開しています。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsControllerSampleSnippet}
          jsSnippet={jsControllerSampleSnippet}
        />
        <Hint>
          Nest
          CLIは、開発者がこれらすべてを行う手間を省くために、自動的にすべての
          <Hl>ボイラープレートコード</Hl>
          を生成するジェネレータ（スキーマ）を提供しています。この機能の詳細については、
          <Link href="recipes/crud-generator">こちら</Link>を読んでください。
        </Hint>
      </Section>
      <Section>
        <Heading id={listOfContents[15].id} variant="h2">
          {listOfContents[15].title}
        </Heading>
        <p>
          上記のコントローラが定義されていても、Nestはまだ
          <CodeSpan>CatsController</CodeSpan>
          が存在することを知らないため、このクラスのインスタンスを作成しません。
        </p>
        <p>
          コントローラは常にモジュールに属する必要があります。
          具体的には、コントローラーを使えるようにするには、コントローラークラスを
          <CodeSpan>@Module()</CodeSpan>
          デコレータ内の
          <CodeSpan>controllers</CodeSpan>配列に含めます。 今の段階では、
          <CodeSpan>src/</CodeSpan>ディレクトリ下のルートにある
          <CodeSpan>AppModule</CodeSpan>
          以外のモジュールはまだ定義されていません。そのため、
          <CodeSpan>AppModule</CodeSpan>を仮で使用して、
          <CodeSpan>CatsController</CodeSpan>をモジュールに登録します。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsRegisterToModuleSnippet}
          jsSnippet={jsRegisterToModuleSnippet}
        />
        <p>
          上記のように、<CodeSpan>@Module()</CodeSpan>
          デコレータを使用してモジュールクラスにメタデータに加えることで、Nestはどのコントローラをマウントするべきか認識することができます。
        </p>
      </Section>
      <Section>
        <Heading id={listOfContents[16].id} variant="h2">
          {listOfContents[16].title}
        </Heading>
        <p>
          これまでは、Nestの標準的な方法でレスポンスを操作する方法を説明しました。レスポンスを操作する第2の方法は、ライブラリ固有(expressなど)の
          <ExternalLink href="https://expressjs.com/en/api.html#res">
            レスポンスオブジェクト
          </ExternalLink>
          を使用することです。特定のレスポンスオブジェクトを注入するためには、
          <CodeSpan>@Res()</CodeSpan>
          デコレータを使用する必要があります。違いを示すために、
          <CodeSpan>CatsController</CodeSpan>
          を以下のように書き直してみましょう。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsWithResponseObjectSnippet}
          jsSnippet={jsWithResponseObjectSnippet}
        />

        <p>
          このアプローチは機能し、レスポンスオブジェクトを制御することで、確かにいくつかの点で柔軟性を提供します（ヘッダーの操作、ライブラリ固有の機能など）。ただし、注意して使用する必要があります。一般的に、このアプローチはあまり明確ではなく、いくつかの欠点があります。
          主な欠点は、コードがプラットフォーム依存になることです（基本となるライブラリがレスポンスオブジェクトで異なるAPIを持っている可能性があるため）。そして、テストが難しくなることです（レスポンスオブジェクトをモックする必要があるなど）。
        </p>
        <p>
          また、上記の例では、Nestの機能（Interceptorsや
          <CodeSpan>@HttpCode()</CodeSpan> / <CodeSpan>@Header()</CodeSpan>
          デコレータなどの、Nestの標準的なレスポンス処理に依存する機能）との互換性が失われます。これを修正するには、次のように
          <CodeSpan>passthrough</CodeSpan>オプションを<CodeSpan>true</CodeSpan>
          に設定してください。
        </p>
        <ToggleCodeBlock
          tsSnippet={tsLibrarySpecificCompatibilitySnippet}
          jsSnippet={jsLibrarySpecificCompatibilitySnippet}
        />
        <p>
          こうすることで、レスポンスオブジェクトを直接操作しつつ（たとえば、特定の条件に応じてクッキーまたはヘッダーを設定するなど）、残りの部分はフレームワークに任せることができます。
        </p>
      </Section>
      <PageFooter>
        Translated from{' '}
        <ExternalLink href={originalLink}>{originalLink}</ExternalLink>
      </PageFooter>
    </V10PageTemplate>
  )
}

export default ControllersPage
