import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma.service'
import {CreateTodolistDto} from './todolist.dto'
import {task_status} from '@prisma/client'

@Injectable()
export class TodolistService {
  constructor(private prisma: PrismaService) {
  }
  
  async get(taskStatus?: task_status) {
    if (taskStatus) {
      return this.prisma.todolist.findMany({ where: { status: taskStatus } })
    }
    
    return this.prisma.todolist.findMany()
  }

  async create(data: CreateTodolistDto) {
    return this.prisma.todolist.create({ data })
  }
  
  async update(id: string, data: CreateTodolistDto) {
    return this.prisma.todolist.update({ data: { ...data, updatedAt: new Date() }, where: { id }})
  }
  
  async delete(id: string) {
    return this.prisma.todolist.delete({ where: { id }} )
  }
}
