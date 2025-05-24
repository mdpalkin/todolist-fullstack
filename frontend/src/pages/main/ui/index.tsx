import { AddTaskForm } from '@/features/add-task-form'
import { QueryKeysEnum, taskApi } from '@/shared/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Task } from './task'
import { TaskSkeleton } from './task/skeleton'
import { useCallback } from 'react'
import { Tab, Tabs } from '@heroui/react'
import type { TaskStatusEnum } from '@/shared/api/task/types'

export const Main = () => {
	const queryClient = useQueryClient()
	
	const { data: fetchData, isLoading } = useQuery({
		queryKey: [QueryKeysEnum.TODOLIST],
		queryFn: () => taskApi.getTasks(),
	})
	
	const updateTask = useMutation({
		mutationFn: taskApi.updateTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QueryKeysEnum.TODOLIST] })
		},
	})

	const deleteTask = useMutation({
		mutationFn: taskApi.deleteTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QueryKeysEnum.TODOLIST] })
		},
	})

	const handleUpdateTaskStatus = useCallback((taskId: string, status: TaskStatusEnum) => {
		updateTask.mutateAsync({ id: taskId, status })
	}, [])

	const handleDeleteTask = useCallback((taskId: string) => {
		deleteTask.mutateAsync(taskId)
	}, [])

	
	return (
		<div className='max-w-5xl p-10 mx-auto flex flex-col gap-10 my-10'>
			<AddTaskForm />
			<Tabs className=''>
				<Tab title={'All'}/>
				<Tab title={'Active'}></Tab>
				<Tab title={'Active'}></Tab>
			</Tabs>
			<div className='flex gap-4 flex-col'>
				{isLoading ? (
					<TaskSkeleton />
				) : (
				fetchData?.data?.map((task) => (
					<Task
						deleteTask={handleDeleteTask}
						updateTaskStatus={handleUpdateTaskStatus}
						key={task.id}
						task={task}
					/>
				))
				)}
			</div>
		</div>
	)
}
