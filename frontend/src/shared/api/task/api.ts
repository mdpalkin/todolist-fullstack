import { instance } from './instance'
import type { GetTaskParams, ITask } from './types'
import type { AddTaskDTO } from './dtos/add-task.dto'
import type { UpdateTaskDTO } from './dtos'

export const taskApi = {
	getTasks(params?: GetTaskParams) {
		return instance.get<ITask[]>('/task', { params })
	},
	addTask(payload: AddTaskDTO) {
		return instance.post<AddTaskDTO>('/task', payload)
	},
	updateTask({id, ...payload}: UpdateTaskDTO) {
		return instance.patch<AddTaskDTO>(`/task/${id}`, payload)
	},
	deleteTask(id: string) {
		return instance.delete(`/task/${id}`)
	},
}
