import { instance } from './instance'
import type { ITodoList } from './types'
import type { AddTaskDTO } from './dtos/add-task.dto'

export const todolistApi = {
	getTodolist() {
		return instance.get<ITodoList[]>('/todolist')
	},
	addTask(payload: AddTaskDTO) {
		return instance.post<AddTaskDTO>('/todolist', payload)
	}
}

