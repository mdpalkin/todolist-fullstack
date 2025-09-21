import { useTodolists } from '@/entities/todolist/api'
import { Todolist } from './todolist'
import { Button, useDisclosure } from '@heroui/react'
import { AddTodolistModal } from '@/features/add-todolist-modal'

export const Todolists = () => {
	const { data: fetchData } = useTodolists()
	const { isOpen, onOpenChange } = useDisclosure()

  return (
		<>
    <div className='max-w-5xl p-10 mx-auto'>
			<Button onPress={onOpenChange}>Add Todolist</Button>
      <div className='flex gap-10 my-10'>
      {fetchData?.map((todolist) => (
          <Todolist key={todolist.todolistId} todolist={todolist} />
        ))}
      </div>
    </div>
			<AddTodolistModal isOpen={isOpen} onOpenChange={onOpenChange} />
		</>
  )
}
