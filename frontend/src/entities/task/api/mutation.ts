import { type AddTaskDTO, type ITask, type UpdateTaskDTO } from '@/shared/api';
import { reminderApi } from '@/shared/api'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError, AxiosResponse } from 'axios'

const taskMutationKeys = {
  create: ['createTask'] as const,
  delete: ['deleteTask'] as const,
  update: ['updateTask'] as const,
};

export const useCreateTask = (onSuccess?: () => void) => {
  return useMutation<AxiosResponse<ITask>, AxiosError, AddTaskDTO>({
    mutationKey: taskMutationKeys.create,
    mutationFn: (payload: AddTaskDTO) => reminderApi.addTask(payload),
    onSuccess,
  });
};

export const useDeleteTask = (onSuccess?: () => void) => {
  return useMutation<void, AxiosError, string>({
    mutationKey: taskMutationKeys.delete,
    mutationFn: (payload: string) => reminderApi.deleteTask(payload),
    onSuccess,
  });
};

export const useUpdateTask = (onSuccess?: () => void) => {
  return useMutation<AxiosResponse<ITask>, AxiosError, UpdateTaskDTO>({
    mutationKey: taskMutationKeys.update,
    mutationFn: (payload: UpdateTaskDTO) => reminderApi.updateTask(payload),
    onSuccess,
  });
};
