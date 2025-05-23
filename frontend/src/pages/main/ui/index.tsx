import { AddTaskForm } from '@/features/add-task-form'
import { todolistApi } from '@/shared/api'
import { TodolistStatusEnum } from '@/shared/api/todolist/types'
import { Card, CardBody, Checkbox } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { Task } from './task'
import { TaskSkeleton } from './task/skeleton'

export const Main = () => {
	const { data: fetchData, isLoading, isError } = useQuery({ queryKey: ['todolists'], queryFn: todolistApi.getTodolist })	
	return (
		<div className='max-w-5xl mx-auto'>
			<AddTaskForm />
			<div className='flex gap-4 flex-col mx-10'>
				{isLoading ? (
					<TaskSkeleton />
				) : (
				fetchData?.data?.map((task) => (
					<Task key={task.id} task={task} />
				))
				)}
			</div>
		</div>
	)
}