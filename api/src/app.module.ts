import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TodolistModule } from './todolist/todolist.module';

@Module({
	imports: [TaskModule, TodolistModule],
})
export class AppModule {}
