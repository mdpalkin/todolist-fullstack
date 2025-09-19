import { useTodolists } from '@/entities/todolist/api'
import { Todolist } from './todolist'
import { Button, useDisclosure } from '@heroui/react'
import { AddTodolistModal } from '@/features/add-todolist-modal'

export const Todolists = () => {
	const { data: fetchData, isLoading } = useTodolists()
	const { isOpen, onOpenChange } = useDisclosure()

  return (
		<>
    <div className='max-w-5xl p-10 mx-auto flex flex-col gap-10 my-10'>
			<Button onPress={onOpenChange}>Add Todolist</Button>
      {fetchData?.map((todolist) => (
        <Todolist key={todolist.todolistId} todolist={todolist} />
      ))}
    </div>
			<AddTodolistModal isOpen={isOpen} onOpenChange={onOpenChange} />
		</>
  )
}
