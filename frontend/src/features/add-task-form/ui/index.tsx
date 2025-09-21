import { useCallback } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Button, Card, CardBody, Input, Textarea } from '@heroui/react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { addTaskFormSchema, type AddTaskFormSchema } from '../model'
import { tasksQueryKeys } from '@/entities/task/api/query'
import { useParams, useSearchParams } from 'react-router'
import type { TaskStatusEnum } from '@/shared/api'
import { useCreateTask } from '@/entities/task'

export const AddTaskForm = () => {

	const queryClient = useQueryClient()
	const { id } = useParams<{ id: string }>()
	const [ searchParams ] = useSearchParams()

	const status = searchParams.get('status') as TaskStatusEnum
	const title = searchParams.get('title')

	const { register, formState: { errors }, handleSubmit, reset } = useForm<AddTaskFormSchema>({
		resolver: zodResolver(addTaskFormSchema)
	})

	const onSuccess = useCallback(() => {
		reset()
		queryClient.invalidateQueries({ queryKey: tasksQueryKeys.all(id!, { status, title: title || undefined }) })
	}, [reset, queryClient, status, title])

	const { mutateAsync: addTask, isPending } = useCreateTask(onSuccess)

	const onSubmit = (data: AddTaskFormSchema) => {
		addTask({
			title: data.title,
			description: data.description,
			todolistId: id!
		})
	}

	return (
		<Card className='p-2'>
			<CardBody>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
				<Input
					label='Title'
					labelPlacement='outside'
					placeholder='Enter task title'
					errorMessage={errors.title?.message} 
					isInvalid={!!errors.title}
					{...register('title')}
				/>
				<Textarea 
				label='Description'
				labelPlacement='outside'
				placeholder='Enter task description'
				errorMessage={errors.description?.message}
				{...register('description')}
				/>
				<Button isLoading={isPending} variant='flat' type='submit' color='primary' className='w-full'>
					Add Task
				</Button>
			</form>
			</CardBody>
		</Card>		
	)
}
