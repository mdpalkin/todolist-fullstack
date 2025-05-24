import { FormErrorsEnum } from '@/shared/enums'
import { z } from 'zod';

export const addTaskFormSchema = z.object({
	title: z.string().min(1, FormErrorsEnum.FIELD_REQUIRED),
	description: z.string().optional(),
})

export type AddTaskFormSchema = z.infer<typeof addTaskFormSchema>;