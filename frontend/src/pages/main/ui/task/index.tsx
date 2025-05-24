import { TaskStatusEnum, type ITask } from '@/shared/api/task/types'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Checkbox } from '@heroui/react'
import { format } from 'date-fns'
import type { ChangeEvent } from 'react'

interface Props {
	task: ITask
	updateTaskStatus: (taskId: string, status: TaskStatusEnum) => void
	deleteTask: (taskId: string) => void
}

export const Task = (props: Props) => {
	const { task, updateTaskStatus, deleteTask } = props
	
	const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
		const newStatus = event.target.checked ? TaskStatusEnum.COMPLETED : TaskStatusEnum.ACTIVE
		updateTaskStatus(task.id, newStatus)
	}

	const handleDeleteTask = () => {
		deleteTask(task.id)
	}

	return (
			<Card>
					<CardBody className='flex flex-row justify-between items-center'>
						<div className='flex gap-4'>
						<Checkbox onChange={handleChangeCheckbox} isSelected={task.status === TaskStatusEnum.COMPLETED}/>
						<div className='flex flex-col'>
							<span className='text-lg font-bold'>{task.title}</span>
							<span className='text-sm text-gray-500'>Created at: {format(task.createdAt, 'dd.MM.yyyy, HH:mm')}</span>
						</div>
						</div>
						<TrashIcon className='w-5 h-5 transition hover:opacity-9 cursor-pointer' onClick={handleDeleteTask} />
					</CardBody>
				</Card>
	)
}