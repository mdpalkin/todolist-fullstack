import { reminderApi } from '@/shared/api/reminder-api'
import type { GetTaskParams } from '@/shared/api/reminder-api/task/types'
import { useQuery } from '@tanstack/react-query';

const tasksQueryKeys = {
  all: (todolistId: string, params?: GetTaskParams) => ['getAllTasks', todolistId, JSON.stringify(params)] as const,
};

export const useTasks = (todolistId: string, params?: GetTaskParams) => {
  return useQuery({
    queryKey: tasksQueryKeys.all(todolistId),
    queryFn: () => reminderApi.getTasks(todolistId, params),
    select: (response) => response.data,
  });
};

export { tasksQueryKeys };
