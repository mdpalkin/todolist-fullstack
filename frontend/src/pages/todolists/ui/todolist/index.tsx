import {Card, CardFooter, Image, Button} from "@heroui/react";
import type { ITodolist } from "@/shared/api/reminder-api/todolist/types";
import { useNavigate } from 'react-router'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useQueryClient } from '@tanstack/react-query'
import { todolistsQueryKeys, useDeleteTodolist } from '@/entities/todolist/api'

interface Props {
	todolist: ITodolist
}

export const Todolist = (props: Props) => {
	const { todolist } = props

	const navigate = useNavigate()

	const handleNavigateToTasks = () => {
		navigate(`/tasks/${todolist.todolistId}`)
	}

	const queryClient = useQueryClient()

	const onSuccess = () => {
		queryClient.invalidateQueries({ queryKey: todolistsQueryKeys.all })
	}	

	const { mutate: deleteTodolist } = useDeleteTodolist(onSuccess)

	const handleDeleteTodolist = () => {
		deleteTodolist(todolist.todolistId)
	}

	return (
		<Card isFooterBlurred className="group border-none relative max-w-50 hover:scale-102 transition-all duration-300" radius="lg">
		<TrashIcon className='invisible group-hover:visible absolute top-2 z-12 right-2 w-5 h-5 transition hover:opacity-9 cursor-pointer' onClick={handleDeleteTodolist} />	
		<Image
			alt="Woman listing to music"
			className="object-cover"
			height={200}
			src="https://heroui.com/images/hero-card.jpeg"
			width={200}
		/>
		<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
			<p className="text-tiny text-white/80">{todolist.title}</p>
			<Button
				className="text-tiny text-white bg-black/20"
				color="default"
				radius="lg"
				size="sm"
				variant="flat"
				onClick={handleNavigateToTasks}
			>
				Go to tasks
			</Button>
		</CardFooter>
	</Card>	
	)
}
