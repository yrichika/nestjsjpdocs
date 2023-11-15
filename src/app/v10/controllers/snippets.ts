import { CodeSnippet, JsCodeSnippet, TsCodeSnippet } from '@/types/CodeSnippet'

export const tsCatsControllerSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}
`.trim(),
}

export const jsCatsControllerSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        return 'This action returns all cats';
    }
}
`.trim(),
}

export const tsRequestObjectSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
`.trim(),
}

export const jsRequestObjectSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
import { Controller, Bind, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @Bind(Req())
  findAll(request) {
    return 'This action returns all cats';
  }
}
`.trim(),
}

export const tsCreateCatHandler: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
  `.trim(),
}

export const jsCreateCatHandler: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.ts',
  code: `
import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create() {
    return 'This action adds a new cat';
  }

  @Get()
  findAll() {
    return 'This action returns all cats';
  }
}
  `.trim(),
}

export const patternMatchingSnippet: CodeSnippet = {
  lang: 'js',
  code: `
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
  `.trim(),
}

export const statusCodeSnippet: CodeSnippet = {
  lang: 'js',
  code: `
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
`.trim(),
}

export const headerSnippet: CodeSnippet = {
  lang: 'js',
  code: `
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
  `.trim(),
}

export const redirectSnippet: CodeSnippet = {
  lang: 'js',
  code: `
@Get()
@Redirect('https://nestjs.com', 301)
  `.trim(),
}

export const redirectOverrideSnippet: CodeSnippet = {
  lang: 'js',
  code: `
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
} 
  `.trim(),
}

export const tsRouteParametersSnippet: TsCodeSnippet = {
  lang: 'ts',
  code: `
@Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return \`This action returns a #\${params.id} cat\`;
}
  `.trim(),
}

export const jsRouteParametersSnippet: JsCodeSnippet = {
  lang: 'js',
  code: `
@Get(':id')
@Bind(Param())
findOne(params) {
  console.log(params.id);
  return \`This action returns a #\${params.id} cat\`;
}
  `.trim(),
}

export const tsRouteParametersNameSpecifiedSnippet: TsCodeSnippet = {
  lang: 'ts',
  code: `
@Get(':id')
findOne(@Param('id') id: string): string {
  return \`This action returns a #\${id} cat\`;
}
  `.trim(),
}

export const jsRouteParametersNameSpecifiedSnippet: JsCodeSnippet = {
  lang: 'js',
  code: `
@Get(':id')
@Bind(Param('id'))
findOne(id) {
  return \`This action returns a #\${id} cat\`;
}
  `.trim(),
}

export const controllerHostOptionSnippet: CodeSnippet = {
  lang: 'js',
  code: `
@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
  `.trim(),
}

export const controllerHostOptionParamSnippet: CodeSnippet = {
  lang: 'js',
  code: `
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
  `.trim(),
}
