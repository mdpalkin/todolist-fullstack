import type { FormEvent } from 'react'
import { Button, Card, CardBody, Form, Input, Textarea } from '@heroui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { todolistApi } from '@/shared/api'

export const AddTaskForm = () => {

	const queryClient = useQueryClient()

	const addTask = useMutation({
		mutationFn: todolistApi.addTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todolists'] })
		},
	})

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = Object.fromEntries(new FormData(e.currentTarget));
		
		addTask.mutate({
			title: data.title as string,
			description: data.description as string,
		})
	}

	return (
		<Card className='m-10 p-2'>
			<CardBody>
			<Form onSubmit={onSubmit} className="flex flex-col gap-4">
				<Input
					name='title'
					label='Title'
					labelPlacement='outside'
					isRequired
					placeholder='Enter task title' 
				/>
				<Textarea 
				name='description'
				label='Description'
				labelPlacement='outside'
				placeholder='Enter task description'
				/>
				<Button variant='flat' type='submit' color='primary' className='w-full'>
					Add Task
				</Button>
			</Form>
			</CardBody>
		</Card>		
	)
}