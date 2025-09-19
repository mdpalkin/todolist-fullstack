import { IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateTodolistDTO {	

	@ApiProperty({ default: 'Todolist title' })
	@IsString()
	title: string
}
