import {
  Body,
  Controller,
  Get,
  //   Header,
  HostParam,
  //   HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  //   Req,
} from '@nestjs/common';
import { CreateCatDto } from './dto/cat.dto';
// import { Observable, of } from 'rxjs';

@Controller('cats')
export class CatsController {
  @Get()
  //   @Redirect('https://nestjs.com', 301)
  //   findAll(@Req() request: Request): string {
  //     return `This action returns all cats ${request.url}`;
  //   }
  async findAll(): Promise<any[]> {
    return [];
  }
  //   findAll(): Observable<any[]> {
  //     return of([]);
  //   }

  @Post()
  //   @Header('Cache-Control', 'none')
  //   @HttpCode(204)
  //   create(): string {
  //     return 'This action adds a new cat';
  //   }
  async create(@Body() CreateCatDto: CreateCatDto) {
    return `This action adds a new cat ${CreateCatDto}`;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}

@Controller({ host: ':account.example.com' })
export class AdminController {
  @Get()
  //   index(): string {
  //     return 'Admin page';
  //   }
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
