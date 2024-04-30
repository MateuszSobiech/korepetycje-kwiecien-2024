import { useEffect, useState } from 'react';
import { User, getUsers, putUserAge } from './api';

export const Optimistic = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const changeAge = (userId: number) => {
    const currentUsers = users;

    setUsers(
      currentUsers.map((user) => {
        if (user.id !== userId) return user;

        return { ...user, age: user.age + 1 };
      })
    );

    putUserAge(userId)
      .catch(() => {
        setUsers(currentUsers);
      });
  };

  return (
    <>
      {users.length === 0 && '...Loading'}

      {users.map((user) => (
        <div key={user.id}>
          {user.name} is {user.age}
          <br />
          <button onClick={() => changeAge(user.id)}>Change age</button>
          <hr />
        </div>
      ))}
    </>
  );
};
