
import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {TaskService} from './task.service'
import {CreateTaskDTO} from './dtos/task.dto'
import { FilterTaskDTO } from './dtos'

@Controller('task')
@ApiTags('task')
export class TaskController {
  constructor(private todolistService: TaskService) {}
  
  @Get()
  @ApiOperation({ summary: 'Get tasks' })
  find(
    @Query() filterQuery: FilterTaskDTO 
  ) {
    return this.todolistService.get(filterQuery)
  }
  
  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  create(@Body() createTodoDto: CreateTaskDTO) {
    return this.todolistService.create(createTodoDto)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Get all tasks' })
  update(@Param('id') id: string, @Body() updateTodolist: CreateTaskDTO) {
    return this.todolistService.update(id, updateTodolist)
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete task' })
  delete(@Param('id') id: string) {
    return this.todolistService.delete(id)
  }
}
