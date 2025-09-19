
import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {TaskService} from './task.service'
import {CreateTaskDTO} from './dtos/task.dto'
import { FilterTaskDTO } from './dtos'

@Controller('task')
@ApiTags('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  
  @Get(':todolistId')
  @ApiOperation({ summary: 'Get tasks' })
  find(
    @Query() filterQuery: FilterTaskDTO 
  ) {
    return this.taskService.get(filterQuery)
  }
  
  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  create(@Body() createTodoDto: CreateTaskDTO) {
    return this.taskService.create(createTodoDto)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update task' })
  update(@Param('id') id: string, @Body() updateTodolist: CreateTaskDTO) {
    return this.taskService.update(id, updateTodolist)
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete task' })
  delete(@Param('id') id: string) {
    return this.taskService.delete(id)
  }
}
