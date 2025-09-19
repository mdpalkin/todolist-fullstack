import {Card, CardFooter, Image, Button} from "@heroui/react";
import type { ITodolist } from "@/shared/api/reminder-api/todolist/types";
import { useNavigate } from 'react-router'

interface Props {
	todolist: ITodolist
}

export const Todolist = (props: Props) => {
	const { todolist } = props

	const navigate = useNavigate()

	const handleGoToTasks = () => {
		navigate(`/tasks/${todolist.todolistId}`)
	}

	return (
		<Card isFooterBlurred className="border-none max-w-50" radius="lg">
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
				onClick={handleGoToTasks}
			>
				Go to tasks
			</Button>
		</CardFooter>
	</Card>	
	)
}