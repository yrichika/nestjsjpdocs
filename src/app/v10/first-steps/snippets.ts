import { CodeSnippet, JsCodeSnippet, TsCodeSnippet } from '@/types/CodeSnippet'

export const installSnippet: CodeSnippet = {
  lang: 'shell',
  code: `
npm i -g @nestjs/cli
nest new project-name
`.trim(),
}

export const mainTsSnippet: TsCodeSnippet = {
  lang: 'typescript',
  filename: 'main.ts',
  code: `
// TS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
  `.trim(),
}

export const mainJsSnippet: JsCodeSnippet = {
  lang: 'javascript',
  filename: 'main.js',
  code: `
// JS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
  `.trim(),
}

export const createAppSnippet: CodeSnippet = {
  lang: 'typescript',
  code: `
const app = await NestFactory.create<NestExpressApplication>(AppModule);
`.trim(),
}

export const startAppSnippet: CodeSnippet = {
  lang: 'shell',
  code: `
npm run start
  `.trim(),
}

export const watchDevSnippet: CodeSnippet = {
  lang: 'shell',
  code: `
npm run start:dev
  `.trim(),
}

export const lintSnippet: CodeSnippet = {
  lang: 'shell',
  code: `
# eslintでリントと自動修正
npm run lint
  
# prettierでフォーマット
npm run format
  `.trim(),
}
