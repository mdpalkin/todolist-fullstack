import { AddTaskForm } from '@/features/add-task-form'
import { QueryKeysEnum, taskApi } from '@/shared/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Task } from './task'
import { TaskSkeleton } from './task/skeleton'
import { useCallback, useEffect, useState, type ChangeEvent, type Key } from 'react'
import { Input, Tab, Tabs } from '@heroui/react'
import { TaskStatusEnum } from '@/shared/api/task/types'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useDebouncedCallback } from 'use-debounce';

export const Main = () => {
	const queryClient = useQueryClient()
	const [status, setStatus] = useState<TaskStatusEnum | null>(null)
	const [search, setSearch] = useState<string>('')
	
	const { data: fetchData, isLoading, refetch } = useQuery({
		queryKey: [QueryKeysEnum.TASK],
		queryFn: () => {
			const filter = {
				...(!!status ? { status } : {}),
				...(!!search ? { title: search } : {}),
			}
			return taskApi.getTasks(filter)
		},
		select: (data) => data.data,
	})

	useEffect(() => {
		refetch()
	}, [status, search])
	
	const updateTask = useMutation({
		mutationFn: taskApi.updateTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QueryKeysEnum.TASK] })
		},
	})

	const deleteTask = useMutation({
		mutationFn: taskApi.deleteTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [QueryKeysEnum.TASK] })
		},
	})

	const handleUpdateTaskStatus = useCallback((taskId: string, status: TaskStatusEnum) => {
		updateTask.mutateAsync({ id: taskId, status })
	}, [])

	const handleDeleteTask = useCallback((taskId: string) => {
		deleteTask.mutateAsync(taskId)
	}, [])

	
	const handleChageTab = (event: Key | null) => {
		const newStatus = event === 'all' ? null : ( event as TaskStatusEnum )
		setStatus(newStatus)
	}

	const handleSearchChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value.trim())
	}, 500)

	return (
		<div className='max-w-5xl p-10 mx-auto flex flex-col gap-10 my-10'>
			<AddTaskForm />
			<div className='flex items-center gap-4'>
			<Tabs onSelectionChange={handleChageTab}>
				<Tab key='all' title={'All'}/>
				<Tab key={TaskStatusEnum.CREATED} title={'Active'}/>
				<Tab key={TaskStatusEnum.COMPLETED} title={'Completed'}/>
			</Tabs>
			<Input
        isClearable
        placeholder="Type to search..."
				startContent={<MagnifyingGlassIcon color='oklch(55.1% 0.027 264.364)' className="max-h-3/5" />}
				onChange={handleSearchChange}
				/>
			</div>
			<div className='flex gap-4 flex-col'>
				{isLoading ? (
					<TaskSkeleton />
				) : (
				fetchData?.map((task) => (
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
