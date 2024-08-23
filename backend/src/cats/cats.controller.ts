import {
  Controller,
  Get,
  HttpStatus,
  // Query,
  Post,
  // Body,
  // Put,
  // Param,
  // Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
// import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/cat.dto';

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
// export class CatsController {
//   @Post()
//   create(@Body() createCatDto: CreateCatDto) {
//     return `This action adds a new cat ${createCatDto}`;
//   }

//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all cats (limit: ${query.limit} items)`;
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} cat`;
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     return `This action updates a #${id} cat ${updateCatDto}`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} cat`;
//   }
// }
