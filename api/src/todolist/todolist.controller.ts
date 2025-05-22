
import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {TodolistService} from './todolist.service'
import {CreateTodolistDto} from './todolist.dto'
import {task_status} from '@prisma/client'

@Controller('todolist')
@ApiTags('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) {}
  
  @Get()
  @ApiOperation({ summary: 'Get todos' })
  find(@Param('status') status?: task_status  ) {
    return this.todolistService.get(status)
  }
  
  @Post()
  @ApiOperation({ summary: 'Create a new todo' })
  create(@Body() createTodoDto: CreateTodolistDto) {
    return this.todolistService.create(createTodoDto)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Get all todos' })
  update(@Param('id') id: string, @Body() updateTodolist: CreateTodolistDto) {
    return this.todolistService.update(id, updateTodolist)
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete todolist' })
  delete(@Param('id') id: string) {
    return this.todolistService.delete(id)
  }
}
