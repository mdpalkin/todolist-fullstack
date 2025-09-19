import { instance } from '../instance'
import type { GetTaskParams, ITask } from './types'
import type { AddTaskDTO } from './dtos/add-task.dto'
import type { UpdateTaskDTO } from './dtos'
import type { AxiosResponse } from 'axios'

export const taskApi = {
	getTasks(todolistId: string, params?: GetTaskParams): Promise<AxiosResponse<ITask[]>> {
		return instance.get<ITask[]>(`/task/${todolistId}`, { params })
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
