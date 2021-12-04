import { useQuery } from 'react-query';
import { api } from '../services/api';
import { User } from '../services/mirage';

export const getUsers = async (page: number, size: number) => {
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

export function useUsers(page: number, size: number) {
  return useQuery(['users', { page, size }], () => getUsers(page, size), {
    staleTime: 1000 * 5, // 5 seconds
  });
}
