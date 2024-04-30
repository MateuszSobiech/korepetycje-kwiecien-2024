import { ComponentType, useEffect, useState } from 'react';

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

export interface WithUsers {
  users: typeof initialUsers | undefined;
}

export const withUsers = <T extends WithUsers>(
  // WrappedComponent: (props: T) => JSX.Element
  WrappedComponent: ComponentType<T>
) => {
  return (wrappedProps: Omit<T, keyof WithUsers>) => {
    const [users, setUsers] = useState<typeof initialUsers>();

    useEffect(() => {
      setUsers(initialUsers);
    }, []);
  
    return <WrappedComponent {...(wrappedProps as T)} users={users} />;
  };
};
