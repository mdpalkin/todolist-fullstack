import { useQuery } from '@tanstack/react-query';

import { reminderApi } from '@/shared/api'

const todolistsQueryKeys = {
  all: ['getAllTodolists'] as const,
};

export const useTodolists = () => {
  return useQuery({
    queryKey: todolistsQueryKeys.all,
    queryFn: () => reminderApi.getTodolist(),
    select: (response) => response.data,
  });
};

export { todolistsQueryKeys };
