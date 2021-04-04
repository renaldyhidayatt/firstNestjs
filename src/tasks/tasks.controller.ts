import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  HttpStatus,
  Patch,
} from '@nestjs/common';
// import { Task } from './tasks.models';
import { TasksService } from './tasks.service';
import { TaskDto } from './tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  async showAll() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.taskService.showAll(),
    };
  }

  @Post('/create')
  async createArticle(@Body() data: TaskDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Artilce added successfully',
      data: await this.taskService.create(data),
    };
  }

  @Get('/:id')
  async findId(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.taskService.findById(id),
    };
  }

  @Patch(':id')
  async updateArticle(@Param('id') id: number, @Body() data: Partial<TaskDto>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'User update successfully',
      data: await this.taskService.update(id, data),
    };
  }
}
