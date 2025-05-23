import { TodolistStatusEnum, type ITodoList } from '@/shared/api/todolist/types'
import { Card, CardBody, Checkbox } from '@heroui/react'
import { format } from 'date-fns'

interface Props {
	task: ITodoList
}

export const Task = (props: Props) => {
	const { task } = props

	return (
			<Card>
					<CardBody className='flex flex-row gap-4'>
						<Checkbox checked={task.status === TodolistStatusEnum.DONE}/>
						<div className='flex flex-col'>
							<span className='text-lg font-bold'>{task.title}</span>
							<span className='text-sm text-gray-500'>Created at: {format(task.createdAt, 'dd.MM.yyyy, H:m')}</span>
						</div>
					</CardBody>
				</Card>
	)
}