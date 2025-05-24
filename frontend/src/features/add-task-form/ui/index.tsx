import { Button, Card, CardBody, Input, Textarea } from '@heroui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QueryKeysEnum, taskApi } from '@/shared/api'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { addTaskFormSchema, type AddTaskFormSchema } from '../model'

export const AddTaskForm = () => {

	const queryClient = useQueryClient()

	const { register, formState: { errors }, handleSubmit, reset } = useForm<AddTaskFormSchema>({
		resolver: zodResolver(addTaskFormSchema)
	})

	const addTask = useMutation({
		mutationFn: taskApi.addTask,
		onSuccess: () => {
			reset()
			queryClient.invalidateQueries({ queryKey: [QueryKeysEnum.TASK] })
		},
	})

	const onSubmit = (data: AddTaskFormSchema) => {
		addTask.mutate({
			title: data.title,
			description: data.description,
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
				<Button isLoading={addTask.isPending} variant='flat' type='submit' color='primary' className='w-full'>
					Add Task
				</Button>
			</form>
			</CardBody>
		</Card>		
	)
}
