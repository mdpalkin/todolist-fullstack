import { Button, Card, CardBody, Form, Input, Textarea } from '@heroui/react'

export const AddTaskForm = () => {

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
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