import { ApiPropertyOptional } from '@nestjs/swagger'
import { taskStatus } from '@prisma/client'
import { IsEnum, IsOptional, IsString } from 'class-validator'

export class FilterTaskDTO {
	@IsString()
	@ApiPropertyOptional({ description: 'Filter by todolistId'})
	todolistId?: string;

	@ApiPropertyOptional({ description: 'Filter by title'})
	@IsOptional()
	@IsString()
	title?: string;

	@ApiPropertyOptional({ description: 'Filter by description'})
	@IsOptional()
	@IsString()
	description?: string;

	@ApiPropertyOptional({ description: 'Filter by status', enum: taskStatus, default: taskStatus.created })
	@IsOptional()
	@IsEnum(taskStatus)
	status?: taskStatus;
}
