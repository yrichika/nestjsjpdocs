import { CodeSnippet, JsCodeSnippet, TsCodeSnippet } from '@/types/CodeSnippet'

export const tsCatsServiceSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.service.ts',

  code: `
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
`.trim(),
}

export const jsCatsServiceSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.service.js',

  code: `
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  constructor() {
    this.cats = [];
  }

  create(cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
  `.trim(),
}

export const tsCatInterfaceSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'interfaces/cat.interface.ts',
  code: `
export interface Cat {
  name: string;
  age: number;
  breed: string;
}
`.trim(),
}

export const jsCatInterfaceSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'interfaces/cat.interface.js',
  code: `
export interface Cat {
  name: string;
  age: number;
  breed: string;
}
`.trim(),
}

export const tsCatsControllerSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'cats.controller.ts',
  code: `
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
  `.trim(),
}

export const jsCatsControllerSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'cats.controller.js',
  code: `
import { Controller, Get, Post, Body, Bind, Dependencies } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
@Dependencies(CatsService)
export class CatsController {
  constructor(catsService) {
    this.catsService = catsService;
  }

  @Post()
  @Bind(Body())
  async create(createCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }
}
  `.trim(),
}

export const dependencyInjectionSnippet: CodeSnippet = {
  lang: 'ts',
  code: `
constructor(private catsService: CatsService) {}
`.trim(),
}

export const optionalProviderSnippet: CodeSnippet = {
  lang: 'ts',
  code: `
import { Injectable, Optional, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
}
`.trim(),
}

export const propertyBasedInjectionSnippet: CodeSnippet = {
  lang: 'ts',
  code: `
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
`.trim(),
}

export const tsProviderRegistrationSnippet: TsCodeSnippet = {
  lang: 'ts',
  filename: 'app.module.ts',
  code: `
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
`.trim(),
}

export const jsProviderRegistrationSnippet: JsCodeSnippet = {
  lang: 'js',
  filename: 'app.module.js',
  code: `
import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
`.trim(),
}
