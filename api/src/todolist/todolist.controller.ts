import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { TodolistService } from './todolist.service'
import { CreateTodolistDTO } from './dtos'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('todolist')
@ApiTags('todolist')
export class TodolistController {
	constructor(private todolistService: TodolistService) {}

	@Get()
	@ApiOperation({ summary: 'Get all todolists' })
	getAll() {
		return this.todolistService.getTodolist()
	}

	@Post()
	@ApiOperation({ summary: 'Create a new todolist' })
	create(@Body() createTodolistDto: CreateTodolistDTO) {
		return this.todolistService.createTodolist(createTodolistDto)
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Update todolist' })
	update(@Param('id') id: string, @Body() updateTodolistDto: CreateTodolistDTO) {
		return this.todolistService.updateTodolist(id, updateTodolistDto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete todolist' })
	delete(@Param('id') id: string) {
		return this.todolistService.deleteTodolist(id)
	}
}
