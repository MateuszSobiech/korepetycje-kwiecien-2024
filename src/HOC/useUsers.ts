import { useEffect, useState } from 'react';

const initialUsers = [
  {
    name: 'Arek',
    age: 30,
    id: 1,
  },
  {
    name: 'Bartek',
    age: 40,
    id: 2,
  },
  {
    name: 'Marek',
    age: 50,
    id: 3,
  },
];

export const useUsers = () => {
  const [users, setUsers] = useState<typeof initialUsers>();

  useEffect(() => {
    setUsers(initialUsers);
  }, []);

  return users;
};
