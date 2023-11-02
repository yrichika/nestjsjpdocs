import { CodeSnippet } from '@/types/CodeSnippet'

export const installSnippet: CodeSnippet = {
  lang: 'shell',
  code: `
npm i -g @nestjs/cli
nest new project-name
`.trim(),
}

export const installWithGitSnippet: CodeSnippet = {
  lang: 'shell',
  code: `
git clone https://github.com/nestjs/typescript-starter.git project
cd project
npm install
npm run start
`.trim(),
}

export const installManuallySnippet: CodeSnippet = {
  lang: 'shell',
  code: `
npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
`.trim(),
}
