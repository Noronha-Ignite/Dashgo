import { useQuery } from 'react-query';
import { api } from '../services/api';
import { User } from '../services/mirage';

export const getUsers = async () => {
  const { data } = await api.get<{ users: User[] }>('users');

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

  return users;
};

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  });
}
