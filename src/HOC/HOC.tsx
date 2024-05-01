import { WithUsers, withUsers } from './WithUsers';
import { useUsers } from '../HOC/useUsers';

interface Props extends WithUsers {
  name: string;
}

export const Hoc = withUsers(({ users, name }: Props) => {
  return (
    <ul>
      {name}
      {users?.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age}
        </li>
      ))}
    </ul>
  );
});

// export default withUsers(HOC)

export const HocHook = ({ name }: { name: string }) => {
  const users = useUsers();

  return (
    <ul>
      {name}
      {users?.map((user) => (
        <li key={user.id}>
          {user.name} is {user.age}
        </li>
      ))}
    </ul>
  );
};
