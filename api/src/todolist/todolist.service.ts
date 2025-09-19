import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateTodolistDTO } from './dtos/create-todolist.dto'
import { TaskService } from 'src/task/task.service'

@Injectable()
export class TodolistService {
  constructor(
    private prisma: PrismaService,
    private taskService: TaskService
  ) {
  }

  async getTodolist() {
    return await this.prisma.todolist.findMany()
  }

  async createTodolist(data: CreateTodolistDTO) {
    return await this.prisma.todolist.create({ data })
  }

  async updateTodolist(todolistId: string, data: CreateTodolistDTO) {
    return await this.prisma.todolist.update({ data, where: { todolistId } })
  }

  async deleteTodolist(todolistId: string) {
    await this.taskService.deleteAllTodolistTasks(todolistId)
    await this.prisma.todolist.delete({ where: { todolistId } })
  }
}
