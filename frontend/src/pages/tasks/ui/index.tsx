import { AddTaskForm } from '@/features/add-task-form'
import { Task } from './task'
import { TaskSkeleton } from './task/skeleton'
import { useCallback, type ChangeEvent, type Key } from 'react'
import { Input, Tab, Tabs } from '@heroui/react'
import { TaskStatusEnum } from '@/shared/api/reminder-api/task/types'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useDebouncedCallback } from 'use-debounce';
import { useParams, useSearchParams } from 'react-router'
import { useTasks } from '@/entities/task/api/query'
import { useDeleteTask, useUpdateTask } from '@/entities/task/api/mutation'

export const Tasks = () => {
	const { id } = useParams<{ id: string }>()
	const [searchParams, setSearchParams] = useSearchParams()

	const status = searchParams.get('status') as TaskStatusEnum | null
	const title = searchParams.get('title')
	
	const { data: fetchData, isLoading, refetch } = useTasks(id!, { status: status || undefined, title: title || '' })

	const onSuccess = () => {
		refetch()
	}

	const { mutateAsync: updateTask } = useUpdateTask(onSuccess)
	const { mutateAsync: deleteTask } = useDeleteTask(onSuccess)

	const handleUpdateTaskStatus = useCallback((taskId: string, status: TaskStatusEnum) => {
		updateTask({ id: taskId, status, todolistId: id! })
	}, [])

	const handleDeleteTask = useCallback((taskId: string) => {
		deleteTask(taskId)
	}, [])

	
	const handleChageTab = (newStatus: Key | null) => {
		if (newStatus === null) {
			searchParams.delete('status')
		} else {
			setSearchParams({ status: newStatus as string })
		}
	}

	const handleSearchChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
		setSearchParams({ search: event.target.value.trim()})
	}, 500)

	return (
		<div className='max-w-5xl p-10 mx-auto flex flex-col gap-10 my-10'>
			<AddTaskForm />
			<div className='flex items-center gap-4'>
			<Tabs selectedKey={status} onSelectionChange={handleChageTab}>
				<Tab key={null} title={'All'}/>
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
