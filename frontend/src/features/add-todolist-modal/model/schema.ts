import { z } from 'zod'

export const addTodolistFormSchema = z.object({
	title: z.string().min(1, 'Title is required'),
})

export type AddTodolistForm = z.infer<typeof addTodolistFormSchema>
