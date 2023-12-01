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

export const tsPromiseSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
@Get()
async findAll(): Promise<any[]> {
  return [];
}
  `.trim(),
}

export const jsPromiseSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
@Get()
async findAll() {
  return [];
}
  `.trim(),
}

export const tsObservableSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
@Get()
findAll(): Observable<any[]> {
  return of([]);
}
  `.trim(),
}

export const jsObservableSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
@Get()
findAll() {
  return of([]);
}
  `.trim(),
}

export const tsDtoSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
  `.trim(),
}

export const jsDtoSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
  `.trim(),
}

export const tsDtoUsageSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
  `.trim(),
}

export const jsDtoUsageSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
@Post()
@Bind(Body())
async create(createCatDto) {
  return 'This action adds a new cat';
}
  `.trim(),
}

export const tsControllerSampleSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return \`This action returns all cats (limit: \${query.limit} items)\`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return \`This action returns a #\${id} cat\`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return \`This action updates a #\${id} cat\`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return \`This action removes a #\${id} cat\`;
  }
}
  `.trim(),
}

export const jsControllerSampleSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
import { Controller, Get, Query, Post, Body, Put, Param, Delete, Bind } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Bind(Body())
  create(createCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  @Bind(Query())
  findAll(query) {
    console.log(query);
    return \`This action returns all cats (limit: \${query.limit} items)\`;
  }

  @Get(':id')
  @Bind(Param('id'))
  findOne(id) {
    return \`This action returns a #\${id} cat\`;
  }

  @Put(':id')
  @Bind(Param('id'), Body())
  update(id, updateCatDto) {
    return \`This action updates a #\${id} cat\`;
  }

  @Delete(':id')
  @Bind(Param('id'))
  remove(id) {
    return \`This action removes a #\${id} cat\`;
  }
}
  `.trim(),
}

export const tsRegisterToModuleSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'app.module.ts',
  code: `
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';

@Module({
  controllers: [CatsController],
})
export class AppModule {}
  `.trim(),
}

export const jsRegisterToModuleSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'app.module.js',
  code: `
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';

@Module({
  controllers: [CatsController],
})
export class AppModule {}
  `.trim(),
}

export const tsWithResponseObjectSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
      res.status(HttpStatus.OK).json([]);
  }
}
  `.trim(),
}

export const jsWithResponseObjectSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
import { Controller, Get, Post, Bind, Res, Body, HttpStatus } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Bind(Res(), Body())
  create(res, createCatDto) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  @Bind(Res())
  findAll(res) {
      res.status(HttpStatus.OK).json([]);
  }
}
  `.trim(),
}

export const tsLibrarySpecificCompatibilitySnippet: TsCodeSnippet = {
  lang: 'ts',
  code: `
@Get()
findAll(@Res({ passthrough: true }) res: Response) {
  res.status(HttpStatus.OK);
  return [];
}
  `.trim(),
}

export const jsLibrarySpecificCompatibilitySnippet: JsCodeSnippet = {
  lang: 'js',
  code: `
@Get()
@Bind(Res({ passthrough: true }))
findAll(res) {
  res.status(HttpStatus.OK);
  return [];
}
  `.trim(),
}
