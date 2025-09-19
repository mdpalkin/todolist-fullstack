import { Button, Modal, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'

interface Props {
	isOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}

export const AddTodolistModal = (props: Props) => {
	const { isOpen, onOpenChange } = props

	return (
		<Modal backdrop='blur' size='lg'  isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				<ModalHeader>Add Todolist</ModalHeader>
				<ModalFooter>
          <Button color="danger" variant="flat">
            Close
          </Button>
          <Button color="primary">
            Create
          </Button>
          </ModalFooter>
			</ModalContent>
		</Modal>
	)
}
