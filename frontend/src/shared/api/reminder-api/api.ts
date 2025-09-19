import { taskApi } from './task/api'
import { todolistApi } from './todolist/api'

export const reminderApi = {
	...todolistApi,
	...taskApi,
}
