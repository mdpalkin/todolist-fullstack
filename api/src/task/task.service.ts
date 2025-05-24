import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma.service'
import {CreateTaskDTO} from './dtos/task.dto'
import { FilterTaskDTO } from './dtos'

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {
  }
  
  async get(filter: FilterTaskDTO) {
    const { description, status, title } = filter
    
    return this.prisma.task.findMany({
      where: {
        ...(title && { title: { contains: title, mode: 'insensitive' } }),
        ...(description && { description: { contains: description, mode: 'insensitive' } }),
        ...(status && { status })
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  async create(data: CreateTaskDTO) {
    return this.prisma.task.create({ data })
  }
  
  async update(id: string, data: CreateTaskDTO) {
    return this.prisma.task.update({ data: { ...data, updatedAt: new Date() }, where: { id }})
  }
  
  async delete(id: string) {
    return this.prisma.task.delete({ where: { id }} )
  }
}
