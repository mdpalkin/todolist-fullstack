import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import { useForm } from 'react-hook-form'
import { FolderIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useCreateTodolist, todolistsQueryKeys } from '@/entities/todolist/api'
import { addTodolistFormSchema, type AddTodolistForm } from '../model'

interface Props {
	isOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}

export const AddTodolistModal = (props: Props) => {
	const { isOpen, onOpenChange } = props

	const queryClient = useQueryClient()

	const onSuccess = () => {
		queryClient.invalidateQueries({ queryKey: todolistsQueryKeys.all })
		onOpenChange(false)
	}

	const { mutate: createTodolist } = useCreateTodolist(onSuccess)

	const { register, formState: { errors }, handleSubmit } = useForm<AddTodolistForm>({
		resolver: zodResolver(addTodolistFormSchema)
	})

	const onSubmit = (data: AddTodolistForm) => {
		createTodolist(data)
	}

	return (
		<Modal backdrop='blur' size='lg'  isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				<ModalHeader>Add Todolist</ModalHeader>
				<ModalBody>
					<form onSubmit={handleSubmit(onSubmit)} id='add-todolist-form' className="flex flex-col gap-4">
					<Input
						endContent={
							<FolderIcon className='text-default-400' width={20} height={20} />
						}
						label="Todolist title"
						placeholder="Enter your todolist title"
						variant="bordered"
						{...register('title')}
						errorMessage={errors.title?.message}
						isInvalid={!!errors.title}
					/>
					</form>
				</ModalBody>
				<ModalFooter>
          <Button onPress={() => onOpenChange(false)} color="danger" variant="flat">
            Close
          </Button>
          <Button type='submit' form='add-todolist-form' color="primary">
            Create
          </Button>
          </ModalFooter>
			</ModalContent>
		</Modal>
	)
}
