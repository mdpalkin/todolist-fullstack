import {IsEnum, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {task_status} from '@prisma/client'

export class CreateTodolistDto {
  @ApiProperty({ default: 'Task title' })
  @IsString()
  title: string
  @IsString()
  @ApiProperty({ default: 'Task description' })
  description: string;
  @ApiProperty({ default: false })
  @IsEnum( task_status )
  @IsOptional()
  status?: task_status
}
