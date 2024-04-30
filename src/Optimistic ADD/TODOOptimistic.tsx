import { useEffect, useState } from 'react';
import { User, getUsers, putUserAge } from './api';

export const TODOOptimistic = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const changeAge = (userId: number) => {
    putUserAge(userId).then(() => {
      getUsers().then(setUsers);
    });
  };

  return (
    <>
      {users ? null : '...Loading'}

      {users?.map((user) => (
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
