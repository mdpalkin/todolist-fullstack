import {IsBoolean, IsEnum, IsOptional, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class CreateTaskDTO {
  @ApiProperty({ default: 'Task title' })
  @IsString()
  title: string
  
  @IsString()
  @ApiProperty({ default: 'Task description' })
  description: string;
  
  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean

  @IsString()
  @ApiProperty({ default: 'Todolist ID' })
  todolistId: string;
}
