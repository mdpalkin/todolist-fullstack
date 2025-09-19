import type { AxiosResponse } from 'axios'
import { instance } from '../instance'
import type { ITodolist } from './types'

import type { CreateTodolistDTO, UpdateTodolistDTO } from './dtos'

export const todolistApi = {
	getTodolist: (): Promise<AxiosResponse<ITodolist[]>> => {
		return instance.get('/todolist')
	},
	createTodolist: (payload: CreateTodolistDTO): Promise<AxiosResponse<ITodolist>> => {
		return instance.post('/todolist', payload)
	},
	updateTodolist: (todolistId: string, payload: UpdateTodolistDTO): Promise<AxiosResponse<ITodolist>> => {
		return instance.patch(`/todolist/${todolistId}`, payload)
	},
	deleteTodolist: (todolistId: string): Promise<AxiosResponse<void>> => {
		return instance.delete(`/todolist/${todolistId}`)
	}
}
