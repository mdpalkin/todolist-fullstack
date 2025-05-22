import { Module } from '@nestjs/common';
import { TodolistModule } from './todolist/todolist.module';

@Module({
	imports: [TodolistModule],
})
export class AppModule {}
