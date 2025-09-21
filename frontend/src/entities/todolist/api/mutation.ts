import { reminderApi, type CreateTodolistDTO, type ITodolist } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

const todolistMutationKeys = {
  create: ['createTodolist'] as const,
  delete: ['deleteTodolist'] as const,
};

export const useCreateTodolist = (onSuccess?: (response: ITodolist) => void) => {
  return useMutation<ITodolist, AxiosError, CreateTodolistDTO>({
    mutationKey: todolistMutationKeys.create,
    mutationFn: (payload: CreateTodolistDTO) => reminderApi.createTodolist(payload),
    onSuccess,
  });
};

export const useDeleteTodolist = (onSuccess?: () => void) => {
  return useMutation<void, AxiosError, string>({
    mutationKey: todolistMutationKeys.delete,
    mutationFn: (payload: string) => reminderApi.deleteTodolist(payload),
    onSuccess,
  });
};

