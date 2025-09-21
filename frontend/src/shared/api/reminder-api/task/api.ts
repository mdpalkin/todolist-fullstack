import { instance } from '../instance'
import type { GetTaskParams, ITask } from './types'
import type { AddTaskDTO } from './dtos/add-task.dto'
import type { UpdateTaskDTO } from './dtos'
import type { AxiosResponse } from 'axios'

export const taskApi = {
	getTasks(todolistId: string, params?: GetTaskParams): Promise<AxiosResponse<ITask[]>> {
		return instance.get<ITask[]>(`/task/${todolistId}`, { params })
	},
	addTask(payload: AddTaskDTO): Promise<AxiosResponse<ITask>> {
		const { todolistId, ...rest } = payload
		return instance.post<ITask>(`/task/${todolistId}`, rest)
	},
	updateTask({id, ...payload}: UpdateTaskDTO): Promise<AxiosResponse<ITask>> {
		return instance.patch<ITask>(`/task/${id}`, payload)
	},
	deleteTask(id: string): Promise<void> {
		return instance.delete(`/task/${id}`)
	},
}
