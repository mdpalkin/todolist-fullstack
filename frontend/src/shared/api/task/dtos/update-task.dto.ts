import type { TaskStatusEnum } from '../types'
import type { AddTaskDTO } from './add-task.dto'

export interface UpdateTaskDTO extends Partial<AddTaskDTO> {
	id: string
	status?: TaskStatusEnum
}
