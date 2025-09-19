import { Module } from '@nestjs/common';
import { TodolistService } from './todolist.service'
import { PrismaService } from 'src/prisma.service'
import { TodolistController } from './todolist.controller'
import { TaskService } from 'src/task/task.service'

@Module({
  imports: [],
  controllers: [TodolistController],
  providers: [TodolistService, PrismaService, TaskService],
})

export class TodolistModule {}
