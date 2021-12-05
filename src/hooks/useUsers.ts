import { useQuery, UseQueryOptions } from 'react-query';

import { api } from '../services/api';
import { User } from '../services/mirage';

type UsersData = {
  users: User[];
  totalCount: number;
};

export const getUsers = async (page: number, size: number): Promise<UsersData> => {
  const { data, headers } = await api.get<{ users: User[] }>('users', {
    params: {
      page,
      per_page: size,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map<User>((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }));

  return { users, totalCount };
};

export function useUsers(page: number, size: number, options?: UseQueryOptions) {
  const queryOptions: UseQueryOptions<UsersData> = {
    staleTime: 1000 * 60 * 10, // 10 minutes
  };

  if (options) {
    queryOptions.initialData = options.initialData as UsersData;
  }

  return useQuery<UsersData>(
    ['users', { page, size }],
    () => getUsers(page, size),
    queryOptions
  );
}
